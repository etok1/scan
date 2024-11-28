import style from "./style.module.css";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <img src="/images/footer.png" alt="footer" />
        <div className={style.info}>
          <div className={style.address}>
            <p>г. Москва, Цветной б-р, 40</p>
            <p>+7 495 771 21 11</p>
            <p>info@skan.ru</p>
          </div>
          <p>Copyright. 2022</p>
        </div>
      </div>
    </footer>
  );
}
