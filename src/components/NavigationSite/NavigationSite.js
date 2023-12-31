import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

import './NavigationSite.css'
import './NavigationSite__list.css'
import './NavigationSite__list-item.css'
import './NavigationSite__link.css'
import './NavigationSite__link_active.css'
import './NavigationSite__account-button.css'
import './NavigationSite__burgerMenu-button.css'

function NavigationSite({ onBurgerMenu }) {
  const location = useLocation();
  const navigate = useNavigate();

  let isPageMoviesOpen = false;
  let isPageSavedMoviesOpen = false;

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
    <nav className="NavigationSite">
      <ul className="NavigationSite__list">
        <li className="NavigationSite__list-item">
          <Link
            className={`NavigationSite__link ${isPageMoviesOpen ? "NavigationSite__link_active" : ""}`}
            to="/movies"
          >Фильмы</Link>
        </li>
        <li className="NavigationSite__list-item">
          <Link
            className={`NavigationSite__link ${isPageSavedMoviesOpen ? "NavigationSite__link_active" : ""}`}
            to="/saved-movies"
          >Сохранённые фильмы</Link>
        </li>
      </ul>
      <button type="button" className="NavigationSite__account-button" onClick={onClickProfileButton}>Аккаунт</button>
      <button type="button" className="NavigationSite__burgerMenu-button" onClick={onBurgerMenu}></button>
    </nav>
  )
}

export default NavigationSite;