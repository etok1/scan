import Button from "../Button/Button";
import style from "./style.module.css";

interface planProps {
  color: string;
  name: string;
  audience: string;
  image: string;
  price: {
    regular: number;
    sale: number;
  };
  alt: string;
  include: string[];
  selected: boolean;
}

export default function PlanCard({
  color,
  name,
  audience,
  image,
  price,
  alt,
  include,
  selected,
}: planProps) {
  return (
    <div
      className={style.card}
      style={{ border: selected ? `2px solid ${color}` : "none" }}
    >
      <div className={style.header} style={{ backgroundColor: color }}>
        {" "}
        <div className={style.heading}>
          <h2 style={{ color: color === "#000000" ? "white" : "black" }}>
            {name}
          </h2>
          <p style={{ color: color === "#000000" ? "white" : "black" }}>
            {audience}
          </p>
        </div>
        <img className={style.img} src={image} alt={name} />
      </div>
      <div className={style.info}>
        {selected ? <p className={style.selected}>Текущий тариф</p> : <p> </p>}
        <h2 className={style.price}>
          {price.sale} ₽<p className={style.regular}>{price.regular} ₽</p>
        </h2>
        <p className={style.alt}>{alt}</p>
        <div className={style.plan}>
          <h4>В тариф входит:</h4>
          <ul>
            {include.map((plan) => (
              <li key={plan}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#5CD740"
                >
                  <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                </svg>
                {plan}
              </li>
            ))}
          </ul>
        </div>
        <div className={style.btn}>
          {" "}
          <Button clicked={selected ? true : false}>
            {selected ? "Перейти в личный кабинет" : "Подробнее"}
          </Button>
        </div>
      </div>
    </div>
  );
}
