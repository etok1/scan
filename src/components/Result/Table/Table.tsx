import { SliderTable } from "./Slider/Slider";
import style from "./style.module.css";

export default function Table() {
  return (
    <div className={style.overall}>
      <h2>Общая сводка</h2>
      <p className={style.result}>Найдено 4 221 вариантов</p>
      <SliderTable />
    </div>
  );
}
