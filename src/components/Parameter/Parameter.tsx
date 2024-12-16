// import Button from "../Button/Button";
import {  useState } from "react";
import Checkbox from "./Checkbox/Checkbox";
import style from "./style.module.css";
import  { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";
import { fetchCards, fetchParameters } from "../../slices/ParamSlice";
import { useNavigate } from "react-router-dom";

const inputFree = [
  { key: "maxFullness", label: "Признак максимальной полноты", checked: true },
  {
    key: "inBusinessNews",
    label: "Упоминания в бизнес-контексте",
    checked: true,
  },
];

const inputs = [
  { key: "onlyMainRole", label: "Главная роль в публикации", checked: true },
  {
    key: "onlyWithRiskFactors",
    label: "Публикации только с риск-факторами",
  },
];

const checkboxs = [
  { key: "excludeTechNews", label: "Включать технические новости рынков" },
  {
    key: "excludeAnnouncements",
    label: "Включать анонсы и календари",
    checked: true,
  },
  { key: "excludeDigests", label: "Включать сводки новостей" },
];

interface RequestBody {
  issueDateInterval: {
    startDate: string | null | number;
    endDate: string | null | number;
  };
  searchContext: {
    targetSearchEntitiesContext: {
      targetSearchEntities: Array<{
        type: string;
        sparkId: number | null;
        entityId: number | null;
        inn: string | number | null;
        maxFullness: boolean;
        inBusinessNews: boolean | null;
      }>;
      onlyMainRole: boolean;
      tonality: string;
      onlyWithRiskFactors: boolean;
      riskFactors: {
        and: Array<{ id: number }>;
        or: Array<{ id: number }>;
        not: Array<{ id: number }>;
      };
      themes: {
        and: Array<{ tonality: string; entityId: number }>;
        or: Array<{ tonality: string; entityId: number }>;
        not: Array<{ tonality: string; entityId: number }>;
      };
    };
    themesFilter: {
      and: Array<{ entityId: number }>;
      or: Array<{ entityId: number }>;
      not: Array<{ entityId: number }>;
    };
  };
  searchArea: {
    includedSources: Array<number>;
    excludedSources: Array<number>;
    includedSourceGroups: Array<number>;
    excludedSourceGroups: Array<number>;
  };
  attributeFilters: {
    excludeTechNews: boolean;
    excludeAnnouncements: boolean;
    excludeDigests: boolean;
  };
  similarMode: string;
  limit: number | null;
  sortType: string;
  sortDirectionType: string;
  intervalType: string;
  histogramTypes: string[];
}


interface InnValidationError {
  code: number;
  message: string;
}

export default function Parameter() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const [data, setData] = useState<RequestBody>({
    issueDateInterval: {
      startDate: null,
      endDate: null,
    },
    searchContext: {
      targetSearchEntitiesContext: {
        targetSearchEntities: [
          {
            type: "company",
            sparkId: null,
            entityId: null,
            inn: 7710137066,
            maxFullness: true,
            inBusinessNews: null,
          },
        ],
        onlyMainRole: true,
        tonality: "any",
        onlyWithRiskFactors: false,
        riskFactors: {
          and: [],
          or: [],
          not: [],
        },
        themes: {
          and: [],
          or: [],
          not: [],
        },
      },
      themesFilter: {
        and: [],
        or: [],
        not: [],
      },
    },
    searchArea: {
      includedSources: [],
      excludedSources: [],
      includedSourceGroups: [],
      excludedSourceGroups: [],
    },
    attributeFilters: {
      excludeTechNews: true,
      excludeAnnouncements: true,
      excludeDigests: true,
    },
    similarMode: "duplicates",
    limit: null,
    sortType: "sourceInfluence",
    sortDirectionType: "desc",
    intervalType: "month",
    histogramTypes: ["totalDocuments", "riskFactors"],
  });

  const [error, setError] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  function validateInn(
    inn: string | number,
    error: InnValidationError
  ): boolean {
    let result = false;
    if (typeof inn === "number") {
      inn = inn.toString();
    } else if (typeof inn !== "string") {
      inn = "";
    }

    if (!inn.length) {
      error.code = 1;
      error.message = "ИНН пуст";
    } else if (/[^0-9]/.test(inn)) {
      error.code = 2;
      error.message = "ИНН может состоять только из цифр";
    } else if ([10, 12].indexOf(inn.length) === -1) {
      error.code = 3;
      error.message = "ИНН может состоять только из 10 или 12 цифр";
    } else {
      const checkDigit = (inn: string, coefficients: number[]): number => {
        let n = 0;
        for (let i in coefficients) {
          n += coefficients[i] * parseInt(inn[i] as string, 10);
        }
        return (n % 11) % 10;
      };

      switch (inn.length) {
        case 10:
          const n10 = checkDigit(inn.toString(), [2, 4, 10, 3, 5, 9, 4, 6, 8]);
          if (n10 === parseInt(inn[9], 10)) {
            result = true;
          }
          break;
        case 12:
          const n11 = checkDigit(
            inn.toString(),
            [7, 2, 4, 10, 3, 5, 9, 4, 6, 8]
          );
          const n12 = checkDigit(
            inn.toString(),
            [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8]
          );
          if (n11 === parseInt(inn[10], 10) && n12 === parseInt(inn[11], 10)) {
            result = true;
          }
          break;
      }
      if (!result) {
        error.code = 4;
        error.message = "Неправильное контрольное число";
      }
    }
    return result;
  }

  const handleInn = (newInn: string | number) => {
    const error: InnValidationError = { code: 0, message: "" };

    if (validateInn(newInn, error)) {
      setData((prevData) => ({
        ...prevData,
        searchContext: {
          ...prevData.searchContext,
          targetSearchEntitiesContext: {
            ...prevData.searchContext.targetSearchEntitiesContext,
            targetSearchEntities:
              prevData.searchContext.targetSearchEntitiesContext.targetSearchEntities.map(
                (entity) => ({
                  ...entity,
                  inn: newInn,
                })
              ),
          },
        },
      }));
    } else {
      console.log("Error: ", error.message);
    }
  };

  const handleLimit = (piece: any) => {
    setData((prevData) => ({
      ...prevData,
      limit: piece,
    }));

    console.log(piece);
  };
  const handleDateStart = (date: string) => {
    setStart(date);
  };
  const handleDateEnd = (date: string) => {
    setEnd(date);
  };

  const formatToYYYYMMDD = (time: number): string => {
    const date = new Date(time);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const handleCheckDates = () => {
    if (start && end) {
      const startDate = new Date(start).getTime();
      const endDate = new Date(end).getTime();
      const now = Date.now();

      if (startDate > now || endDate > now) {
        setError("Даты не могут быть в будущем.");
        return false;
      }

      if (startDate > endDate) {
        setError("Дата начала не может быть позже даты конца.");
        return false;
      }

      setData((prevData) => ({
        ...prevData,
        issueDateInterval: {
          startDate: formatToYYYYMMDD(startDate),
          endDate: formatToYYYYMMDD(endDate),
        },
      }));
      setError("");
      return true;
    }
    setError("Введите обе даты.");
    return false;
  };

  const handleCheckboxChange = (key: string, isChecked: boolean) => {
    setData((prevData) => ({
      ...prevData,
      attributeFilters: {
        ...prevData.attributeFilters,
        [key]: isChecked ? true : false,
      },
    }));
    console.log(key, isChecked);
  };

  const handleCheckboxTwoChange = (key: string, isChecked: boolean) => {
    setData((prevData) => ({
      ...prevData,
      searchContext: {
        ...prevData.searchContext,
        [key]: isChecked ? true : false,
      },
    }));
    console.log(key, isChecked);
  };

  const handleCheckboxFirstChange = (key: string, isChecked: boolean) => {
    setData((prevData) => ({
      ...prevData,
      searchContext: {
        ...prevData.searchContext,
        targetSearchEntitiesContext: {
          ...prevData.searchContext.targetSearchEntitiesContext,
          targetSearchEntities:
            prevData.searchContext.targetSearchEntitiesContext.targetSearchEntities.map(
              (entity) =>
                entity.hasOwnProperty(key)
                  ? {
                      ...entity,
                      [key]: isChecked ? true : false,
                    }
                  : entity
            ),
        },
      },
    }));
    console.log(key, isChecked);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = handleCheckDates();
    if (isValid) {
      console.log("Даты корректны, выполняем отправку.");
      dispatch(fetchParameters(data))
        .then(() => {
          dispatch(fetchCards(data))
          navigate("/result");
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      console.log("Ошибка в датах.");
    }
  };

  const handleTone = (value: string) => {
    setData((prevData: RequestBody) => ({
      ...prevData,
      searchContext: {
        ...prevData.searchContext,
        tonality: value,
      },
    }));
  };

  console.log(data);
  return (
    <form className={style.table} onSubmit={(e) => handleSubmit(e)}>
      <div className={style.search}>
        <div className={style.row}>
          <label className={style.cell}>ИНН компании*</label>
          <input
            className={style.input}
            type="text"
            required
            placeholder="10 цифр"
            onChange={(e) => {
              handleInn(e.target.value);
            }}
          />
        </div>
        <div className={style.row}>
          <label className={style.cell}>Тональность</label>
          <select
            className={style.input}
            name="tone"
            onChange={(e) => {
              handleTone(e.target.value);
            }}
          >
            <option value="any">любая</option>
            <option value="negative">негативная</option>
            <option value="positive">позитивная</option>
          </select>
        </div>
        <div className={style.row}>
          <label className={style.cell}>Количество документов в выдаче*</label>
          <input
            className={style.input}
            type="text"
            required
            placeholder="От 1 до 1000"
            onChange={(e) => handleLimit(e.target.value)}
          />
        </div>
        <div className={style.row}>
          <label className={style.cell}>Диапазон поиска*</label>
          <div className={style.inputs}>
      
            <input
              className={style.input}
              type="date"
              required
              onChange={(e) => handleDateStart(e.target.value)} 
              onBlur={handleCheckDates}
            />{" "}
            <input
              className={style.input}
              type="date"
              required 
              onChange={(e) => handleDateEnd(e.target.value)}
              onBlur={handleCheckDates}
            />
          </div>
        </div>
      </div>
      <div className={style.checkboxes}>
        {inputFree.map((input) => (
          <Checkbox
            label={input.label}
            checked={input.checked}
            onChange={(isChecked) =>
              handleCheckboxFirstChange(input.key, isChecked)
            }
          />
        ))}
        {inputs.map((input) => (
          <Checkbox
            label={input.label}
            checked={input.checked}
            onChange={(isChecked) => {
              handleCheckboxTwoChange(input.key, isChecked);
            }}
          />
        ))}
        {checkboxs.map((checkbox) => (
          <Checkbox
            label={checkbox.label}
            checked={checkbox.checked}
            onChange={(isChecked) =>
              handleCheckboxChange(checkbox.key, isChecked)
            }
          />
        ))}
        <div className={style.btn}>
          <button className={`button ${style.button}`}>Поиск</button>
          <p>* Обязательные к заполнению поля</p>
        </div>
      </div>
      <div className={style.btnMobile}>
          <button className={`button ${style.button}`}>Поиск</button>
          <p>* Обязательные к заполнению поля</p>
        </div>
    </form>
  );
}
