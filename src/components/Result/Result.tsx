import { useSelector } from "react-redux";
import Cards from "../Cards/Cards";
import style from "./style.module.css";
import Table from "./Table/Table";
import { selectCards, selectData } from "../../slices/ParamSlice";

export default function Result() {
  const paramsData = useSelector(selectData);
  const paramsCards = useSelector(selectCards);

  console.log(paramsCards);

  return (
    <div className={style.result} style={{padding: '0 10px', display: 'flex', flexDirection: 'column'}}>
      <section className={style.header}>
        <div className={style.heading}>
          <h1>
            Ищем. Скоро <br /> будут результаты
          </h1>
          <p>
            Поиск может занять некоторое время, <br /> просим сохранять
            терпение.
          </p>
        </div>
        <img src="/images/result1.png" alt="result1" />
      </section>
      <section className={style.report}>
        <Table />
      </section>
      <section className={style.docs}>
        {" "}
        <h2 className={style.headerDocs}>Список документов</h2>
        {paramsCards && <Cards cards={paramsCards}/>}
      </section>
    </div>
  );
}
