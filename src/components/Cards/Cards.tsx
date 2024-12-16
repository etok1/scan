import Card from "./Card/Card";
import style from "./style.module.css";

export default function Cards({cards}:any) {
  return (
    <div className={style.cards}>
      {cards.map((card:any, index:number) => (
        <Card key={index} card={card}/>
      ))}
     
    </div>
  );
}
