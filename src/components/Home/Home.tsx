import { Link } from "react-router-dom";
import Button from "../Button/Button";
import PlanCard from "../PlanCard/PlanCard";
import Slider from "../Slider/Slider";
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

const plans: planProps[] = [
  {
    color: "#FFB64F",
    name: "Beginner",
    audience: "Для небольшого исследования",
    image: "/images/plan1.png",
    price: {
      regular: 200,
      sale: 150,
    },
    alt: "или 150 ₽/мес. при рассрочке на 24 мес.",
    include: [
      "Безлимитная история запросов",
      "Безопасная сделка",
      "Поддержка 24/7",
    ],
    selected: true,
  },
  {
    color: "#7CE3E1",
    name: "Pro",
    audience: "Для HR и фрилансеров",
    image: "/images/plan2.png",
    price: {
      regular: 2600,
      sale: 1299,
    },
    alt: "или 279 ₽/мес. при рассрочке на 24 мес.",
    include: [
      "Все пункты тарифа Beginner",
      "Экспорт истории",
      "Рекомендации по приоритетам",
    ],
    selected: false,
  },
  {
    color: "#000000",
    name: "Business",
    audience: "Для корпоративных клиентов",
    image: "/images/plan3.png",
    price: {
      regular: 200,
      sale: 150,
    },
    alt: "",
    include: [
      "Все пункты тарифа Pro",
      "Безлимитное количество запросов",
      "Приоритетная поддержка",
    ],
    selected: false,
  },
];

export default function Home() { 
  return (
    <div style={{padding: '0 10px', display: 'flex', flexDirection: 'column'}}>
      <section className={style.request}>
        <div className={style.heading}>
          <h1>сервис по поиску публикаций о компании по его ИНН</h1>
          <p>
            Комплексный анализ публикаций, получение данных в формате PDF на
            электронную почту.
          </p>
          <Button>
            <Link to="/search">Запросить данные</Link>
          </Button>
        </div>
        <img src="/images/home1.png" alt="home1" />
      </section>
      <section className={style.reason}>
        <h3>Почему именно мы</h3>
        <Slider />
      </section>

      <img className={style.image} src="/images/home2.png" alt="home2" />

      <section className={style.plans}>
        <h3>наши тарифы</h3>
        <div className={style.plansContainer}>
          {plans.map((plan) => (
            <PlanCard key={plan.name} {...plan} />
          ))}
        </div>
      </section>
    </div>
  );
}
