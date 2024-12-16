import style from "./style.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { fetchUserInfo } from "../../slices/authSlice";
import Desktop from "./Desktop/Desktop";
import BurgerMenu from "./BurgerMenu/BurgerMenu";

const links = [
  { label: "Главная", path: "/" },
  { label: "Тарифы", path: "/" },
  { label: "FAQ", path: "/" },
]
export default function Header() {

  const dispatch = useDispatch<AppDispatch>();
  const { userData, loading, error } = useSelector(
    (state: RootState) => state.auth
  );

  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );


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
      <div className={style.desktop}>
        <Desktop links={links} isAuthenticated={isAuthenticated} loading={loading} dispatch={dispatch} userData={userData}/>
      </div>
      <div className={style.mobile}>
        <BurgerMenu links={links} isAuthenticated={isAuthenticated} loading={loading} dispatch={dispatch} userData={userData}/>
      </div>
    </header>
  );
}
