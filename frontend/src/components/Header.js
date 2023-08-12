import React from "react";
import { useLocation, Link } from "react-router-dom"
import logo from "../images/mesto-logo.svg"

export default function Header({ email, signOut, loggedIn }) {
  const location = useLocation();
  const path = (location.pathname === "/signin") ? "/signup" : "/signin";
  const LinkName = (location.pathname === "/signin") ? "Регистрация" : "Войти";

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="логотип" />
      {
        loggedIn
          ? (
            <div className="header__wrapper">
              <p className="header__email">{email}</p>
              <Link className="header__link" to="/signin" onClick={signOut}>Выйти</Link>
            </div>
          )
          : (
            <Link className="header__link" to={path}>{LinkName}</Link>
          )
      }
    </header>
  )
}
