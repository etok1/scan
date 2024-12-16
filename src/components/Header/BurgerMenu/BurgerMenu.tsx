import { Link } from "react-router-dom";
import style from "./style.module.css";
import ReactLoading from "react-loading";
import { logout } from "../../../slices/authSlice";
import { useState } from "react";

export default function BurgerMenu({
  links,
  isAuthenticated,
  loading,
  dispatch,
  userData,
}) {
  const [clicked, setClicked] = useState(false);

  const toggleMenu = () => {
    setClicked((prevClicked) => !prevClicked);
  };

  return (
    <div className={style.burgerMenu} style={{backgroundColor: clicked ? '#029491' : ''}}>
      <div className={style.headerMenu}>
      {clicked ? <img src="/logoBurger.png" alt="logo" />  : <img src="/logo.png" alt="logo" /> }

        {isAuthenticated && (
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
                      {" "}
                      {userData?.usedCompanyCount}
                    </span>
                  </p>
                  <p>
                    Лимит по компаниям:
                    <span className={style.limit}>
                      {" "}
                      {userData?.companyLimit}
                    </span>
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
        {clicked ? <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none"   onClick={toggleMenu}>
            <rect x="3.53613" width="30" height="5" transform="rotate(45 3.53613 0)" fill="white" />
            <rect x="24.7485" y="3.53564" width="30" height="5" transform="rotate(135 24.7485 3.53564)" fill="white"/>
          </svg> : 
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="25"
            viewBox="0 0 30 25"
            fill="none"
            onClick={toggleMenu}
          >
            <rect width="30" height="5" fill="#029491" />
            <rect y="10" width="30" height="5" fill="#029491" />
            <rect y="20" width="30" height="5" fill="#029491" />
          </svg>}

      </div>
      {clicked && (
        <div className={style.dropMenu}>
          <nav>
            <ul className={style.nav}>
              <li>
                <Link to="/" style={{color: clicked ? 'white' : ''}}>Главная</Link>
              </li>
              <li>
                <Link to="/#" style={{color: clicked ? 'white' : ''}}>Тарифы</Link>
              </li>
              <li>
                <Link to="#" style={{color: clicked ? 'white' : ''}}>FAQ</Link>
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
            <></>
          )}
        </div>
      )}
    </div>
  );
}
