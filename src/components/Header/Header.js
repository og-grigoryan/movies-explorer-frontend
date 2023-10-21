import React from 'react';
import headerLogo from "../../images/header_logo.svg";

import './Header.css'
import './Header_page_authentication.css'
import './Header__logo.css'
import './Header__logo_page_authentication.css'
import './Header__logo-link.css'


function Header({ classNameHeader, classNameLogo, Navigation, onBurgerMenu }) {
  return (
    <header className={classNameHeader}>
      <a className={classNameLogo}
        href="/"
        rel="noreferrer">
        <img className="Header__logo-image" src={headerLogo} alt="Логотип" />
      </a>
      {Navigation && <Navigation onBurgerMenu={onBurgerMenu} />}
    </header>
  )
}

export default Header;