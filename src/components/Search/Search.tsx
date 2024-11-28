import { useSelector } from "react-redux";
import Parameter from "../Parameter/Parameter";
import style from "./style.module.css";
import { RootState } from "../../store/store";

export default function Search() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  if (!isAuthenticated) {
    return (
      <p className="isauth">You need to be logged in to access this page.</p>
    );
  }

  return (
    <>
      <div className={style.heading}>
        <div className={style.header}>
          <h1>
            Найдите необходимые <br /> данные в пару кликов.
          </h1>
          <p>
            Задайте параметры поиска. <br /> Чем больше заполните, тем точнее
            поиск
          </p>
        </div>
        <img className={style.image1} src="/images/search1.png" alt="search1" />
        <img className={style.image2} src="/images/search2.png" alt="search2" />
      </div>
      <div className={style.parameter}>
        <Parameter />
        <img src="/images/search3.png" alt="search3" />
      </div>
    </>
  );
}
