import { selectData } from "../../../slices/ParamSlice";
import { useSelector } from "react-redux";
import { SliderTable } from "./Slider/Slider";
import style from "./style.module.css";

export default function Table() {
  const paramsData = useSelector(selectData);
  console.log(paramsData.data);
  return (
    <div className={style.overall}>
      <h2>Общая сводка</h2>
      {paramsData.data.length ? (
        <p className={style.result}>
          Найдено {paramsData.data.length} вариантов
        </p>
      ) : (
        <p className={style.result}>Найдено ... вариантов</p>
      )}

      <SliderTable data={paramsData.data}/>
    </div>
  );
}
