import Card from "./Card/Card";
import style from "./style.module.css";

export default function Cards() {
  return (
    <div className={style.cards}>
      <Card /> <Card />
    </div>
  );
}
