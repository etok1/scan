import AuthForm from "./AuthForm/AuthForm";
import style from "./style.module.css";

export default function FormPage() {
  return (
    <section className={style.authContainer}>
      <div className={style.heading}>
        <h1>
          Для оформления подписки <br /> на тариф, необходимо
          <br /> авторизоваться.
        </h1>
        <img src="/images/auth1.png" alt="auth1" />
      </div>
      <div className={style.form}>
        <AuthForm />
      </div>
    </section>
  );
}
