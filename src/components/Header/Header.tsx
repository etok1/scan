import { Link } from "react-router-dom";
import style from "./style.module.css";
import { useEffect } from "react";
import ReactLoading from "react-loading";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { fetchUserInfo, logout } from "../../slices/authSlice";
export default function Header() {
  const dispatch = useDispatch<AppDispatch>();
  const { userData, loading, error } = useSelector(
    (state: RootState) => state.auth
  );

  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  console.log(userData);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && !userData && !loading) {
      dispatch(fetchUserInfo());
    }
  }, [dispatch, userData, loading]);

  if (error) {
    console.log(error);
    return <div>Error: {error}</div>;
  }

  return (
    <header className={style.header}>
      {/*  */}
      <img src="/logo.png" alt="logo" />
      <nav>
        <ul className={style.nav}>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/auth">Тарифы</Link>
          </li>
          <li>
            <Link to="/result">FAQ</Link>
          </li>
        </ul>
      </nav>
      {!isAuthenticated ? (
        <div className={style.login}>
          <button className={style.signupBtn}>
            {" "}
            <Link to="/auth">Зарегистрироваться</Link>
          </button>
          <div className={style.line}></div>
          <button className={style.loginBtn}>
            <Link to="/auth">Войти</Link>
          </button>
        </div>
      ) : (
        <>
          <div className={style.info}>
            {loading ? (
              <ReactLoading
                type={"spinningBubbles"}
                color={"#000"}
                height={"20px"}
                width={"20px"}
              />
            ) : (
              <>
                <p>
                  Использовано компаний:
                  <span className={style.used}>
                    {userData?.usedCompanyCount}
                  </span>
                </p>
                <p>
                  Лимит по компаниям:
                  <span className={style.limit}>{userData?.companyLimit}</span>
                </p>
              </>
            )}
          </div>
          <div className={style.profile}>
            <div className={style.user}>
              <h2>Алексей А.</h2>
              <p onClick={() => dispatch(logout())}>Выйти</p>
            </div>
            <img src="/profile.png" alt="profile" />
          </div>
        </>
      )}
    </header>
  );
}
