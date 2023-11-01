import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

import './BurgerMenuPopUp.css';
import './BurgerMenuPopUp_is-opened.css';
import './BurgerMenuPopUp__menu.css';
import './BurgerMenuPopUp__button-close.css';
import './BurgerMenuPopUp__list.css';
import './BurgerMenuPopUp__list-item.css';
import './BurgerMenuPopUp__link.css';
import './BurgerMenuPopUp__link_active.css';
import './BurgerMenuPopUp__account-button.css';

function BurgerMenuPopUp({ isOpen, onClose }) {
  const location = useLocation();
  const navigate = useNavigate();

  let isPageMainOpen = false;
  let isPageMoviesOpen = false;
  let isPageSavedMoviesOpen = false;

  if (location.pathname === "/") {
    isPageMainOpen = true;
  }

  if (location.pathname === "/movies") {
    isPageMoviesOpen = true;
  }

  if (location.pathname === "/saved-movies") {
    isPageSavedMoviesOpen = true;
  }

  function onClickProfileButton() {
    navigate("/profile", { replace: true });
  }

  return (
    <section className={`BurgerMenuPopUp ${isOpen ? "BurgerMenuPopUp_is-opened" : ""}`} aria-label="Меню">
      <nav className="BurgerMenuPopUp__menu">
        <button type="button" className="BurgerMenuPopUp__button-close" onClick={onClose}></button>
        <ul className="BurgerMenuPopUp__list">
          <li className="BurgerMenuPopUp__list-item">
            <Link
              className={`BurgerMenuPopUp__link ${isPageMainOpen ? "BurgerMenuPopUp__link_active" : ""}`}
              to="/"
              onClick={onClose}
            >Главная</Link>
          </li>
          <li className="BurgerMenuPopUp__list-item">
            <Link
              className={`BurgerMenuPopUp__link ${isPageMoviesOpen ? "BurgerMenuPopUp__link_active" : ""}`}
              to="/movies"
              onClick={onClose}
            >Фильмы</Link>
          </li>
          <li className="BurgerMenuPopUp__list-item">
            <Link
              className={`BurgerMenuPopUp__link ${isPageSavedMoviesOpen ? "BurgerMenuPopUp__link_active" : ""}`}
              to="/saved-movies"
              onClick={onClose}
            >Сохранённые фильмы</Link>
          </li>
        </ul>
        <button type="button" className="BurgerMenuPopUp__account-button" onClick={onClickProfileButton}>Аккаунт</button>
      </nav>
    </section>
  )
}

export default BurgerMenuPopUp;
