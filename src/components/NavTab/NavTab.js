import React from 'react';

import './NavTab.css'
import './NavTab__link.css'

function NavTab() {
  return (
    <nav className="NavTab">
      <a className="NavTab__link" href="#AboutProject">О проекте</a>
      <a className="NavTab__link" href="#Techs">Технологии</a>
      <a className="NavTab__link" href="#AboutMe">Студент</a>
    </nav>
  )
}

export default NavTab;