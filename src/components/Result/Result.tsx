import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Cards from "../Cards/Cards";
import style from "./style.module.css";
import Table from "./Table/Table";

export default function Result() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  if (!isAuthenticated) {
    return (
      <p className={style.headerDocs}>
        You need to be logged in to access this page.
      </p>
    );
  }

  return (
    <div className={style.result}>
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
        <Cards />
      </section>
    </div>
  );
}
