import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Navigation.css'
import './Navigation__signIn-button.css'
import './Navigation__signUp-button.css'

function Navigation() {
  const navigate = useNavigate();

  function onClickSignUpButton() {
    navigate("/signup", { replace: true });
  }

  function onClickSigninButton() {
    navigate("/signin", { replace: true });
  }

  return (
    <nav className="Navigation">
        <button type="button" className="Navigation__signUp-button" onClick={onClickSignUpButton}>Регистрация</button>
        <button type="button" className="Navigation__signIn-button" onClick={onClickSigninButton}>Войти</button>
    </nav>
  )
}

export default Navigation;