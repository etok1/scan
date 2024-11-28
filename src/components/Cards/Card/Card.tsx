import style from "./style.module.css";

export default function Card() {
  return (
    <div className={style.card}>
      <div className={style.info}>
        <p className={style.data}>13.09.2021</p>
        <p className={style.author}>Комсомольская правда KP.RU</p>
      </div>
      <h2>Скиллфэктори - лучшая онлайн-школа для будущих айтишников</h2>
      <div className={style.tags}>
        <span className={style.tag}>Технические новости</span>
      </div>
      <img src="/images/result2.png" alt="result2" />
      <p className={style.text}>
        SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь.
        С 2016 года обучение прошли 20 000+ человек из 40 стран с 4 континентов,
        самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере,
        Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon и других
        топовых компаниях. <br /> Принципы SkillFactory: акцент на практике,
        забота о студентах и ориентир на трудоустройство. 80% обучения —
        выполнение упражнений и реальных проектов. Каждого студента поддерживают
        менторы, 2 саппорт-линии и комьюнити курса. А карьерный центр помогает
        составить резюме, подготовиться к собеседованиям и познакомиться с
        IT-рекрутерами.
      </p>
      <div className={style.footer}>
        <button className={style.btn}>Читать в источнике</button>
        <span className={style.words}>2 543 слова</span>
      </div>
    </div>
  );
}
