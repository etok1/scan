// import Button from "../Button/Button";
import { useState } from "react";
import Checkbox from "./Checkbox/Checkbox";
import style from "./style.module.css";
import { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";
import { fetchParameters } from "../../slices/ParamSlice";

const inputs = [
  { key: "", label: "Признак максимальной полноты", checked: true },
  { key: "", label: "Упоминания в бизнес-контексте", checked: true },
  { key: "", label: "Главная роль в публикации" },
  { key: "", label: "Публикации только с риск-факторами" },
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
  intervalType: string;
  issueDateInterval: { from: number | null; to: number | null };
  histogramTypes: string[];
  searchContext: object;
  similarMode: string;
  limit: number | null;
  sortType: string;
  sortDirectionType: string;
  attributeFilters: object;
}
interface SearchContext {
  targetSearchEntitiesContext: string | number;
}
interface Data {
  searchContext: SearchContext;
}
interface InnValidationError {
  code: number;
  message: string;
}

export default function Parameter() {
  const dispatch = useDispatch<AppDispatch>();

  const [data, setData] = useState<RequestBody>({
    intervalType: "month",
    histogramTypes: ["totalDocuments", "riskFactors"],
    issueDateInterval: { from: null, to: null },
    searchContext: {
      targetSearchEntitiesContext: "",
    },
    similarMode: "duplicates",
    limit: null,
    sortType: "issueDate",
    sortDirectionType: "asc",
    attributeFilters: {
      excludeTechNews: false,
      excludeAnnouncements: true,
      excludeDigests: false,
    },
  });

  const [error, setError] = useState();
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

  const handleInn = (inn: string | number) => {
    const error: InnValidationError = { code: 0, message: "" };

    if (validateInn(inn, error)) {
      setData((prevData: RequestBody) => ({
        ...prevData,
        searchContext: {
          targetSearchEntitiesContext: inn,
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

  const handleCheckDates = () => {
    if (start && end) {
      const startDate = new Date(start).getDate();
      const endDate = new Date(end).getDate();
      if (startDate > endDate) {
        setData((prevData) => ({
          ...prevData,
          issueDateInterval: {
            from: startDate,
            to: endDate,
          },
        }));
      }
    }
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
  const handleSubmit = () => {
    handleCheckDates();
    if (!error) {
      dispatch(fetchParameters(data));
    }
  };

  console.log(data);
  return (
    <div className={style.table}>
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
            <option value="любая">любая</option>
            <option value="негативная">негативная</option>
            <option value="позитивная">позитивная</option>
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
            />{" "}
            <input
              className={style.input}
              type="date"
              required
              onChange={(e) => handleDateEnd(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className={style.checkboxes}>
        {inputs.map((input) => (
          <Checkbox label={input.label} checked={input.checked} />
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
    </div>
  );
}
