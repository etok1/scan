import { useEffect, useState } from "react";
import style from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { fetchUserData } from "../../../slices/authSlice";
import { useNavigate } from "react-router-dom";

export default function AuthForm() {
  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();
  const { accessToken, loading, error } = useSelector(
    (state: RootState) => state.auth
  );
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [submit, setSubmit] = useState(true);

  const handleLogin = () => {
    if (login && password) {
      dispatch(
        fetchUserData({
          login: login,
          password: password,
        })
      );
      navigate("/");
    }
  };

  useEffect(() => {
    if (login && password) {
      setSubmit(false);
    } else {
      setSubmit(true);
    }
  }, [login, password]);

  if (loading) {
    return (
      <div>
        <p>loading...</p>
      </div>
    );
  }

  return (
    <form className={style.auth}>
      <div className={style.heading}>
        <p className={`${style.btns} ${style.active}`}>Войти</p>
        <p className={`${style.btns}`}>Зарегистрироваться</p>
      </div>
      <div className={style.forms}>
        {" "}
        <div className={style.form}>
          <label htmlFor="login">Логин или номер телефона:</label>
          <input
            type="text"
            id="login"
            value={login}
            onChange={(e) => {
              setLogin(e.target.value);
              console.log(e.target.value);
            }}
          />
        </div>{" "}
        <div className={style.form}>
          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              console.log(e.target.value);
            }}
          />{" "}
          {}
          <p className={style.warning}>Неправильный пароль</p>
        </div>
        <button
          className={`${style.btn} ${!submit ? style.disabled : undefined}`}
          disabled={submit}
          onClick={handleLogin}
        >
          Войти
        </button>
        <p className={style.reset}>Восстановить пароль</p>
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
        {accessToken && <p>Logged in!</p>}
        <img className={style.img} src="/images/form1.png" alt="form1" />
      </div>
    </form>
  );
}
