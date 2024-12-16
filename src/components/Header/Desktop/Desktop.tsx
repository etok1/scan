import { Link } from 'react-router-dom'
import style from './style.module.css'
import ReactLoading from 'react-loading'
import { logout } from '../../../slices/authSlice'

export default function Desktop({links, isAuthenticated, loading, dispatch, userData}) {
    return (
        <div className={style.headerDesktop}>
          <img src="/logo.png" alt="logo" />
          <nav>
            <ul className={style.nav}>
            {links.map((link) => (
                <li>
                    <Link to={link.path}>{link.name}</Link>
                </li>
            ))}
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
                    <p>Использовано компаний: 
                      <span className={style.used}> {userData?.usedCompanyCount}</span>
                    </p>
                    <p>
                      Лимит по компаниям: 
                      <span className={style.limit}> {userData?.companyLimit}</span>
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
        </div>
    );
  }