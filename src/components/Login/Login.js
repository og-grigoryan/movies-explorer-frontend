import React from 'react';
import Header from '../Header/Header.js';

import './Login__container.css';
import './Login__title.css';
import './Login__form.css';
import './Login__input-container.css';
import './Login__input-label.css';
import './Login__input.css';
import './Login__input_error.css';
import './Login__save-button.css';
import './Login__save-button_disabled.css';
import './Login__text.css';
import './Login__error.css';
import './Login__link.css';

function Login() {
  return (
    <>
      <Header
        classNameHeader='Header Header_page_authentication'
        classNameLogo='Header__logo Header__logo_page_authentication'
        Navigation={false}
      />
      <main className='content'>
        <section className="Login">
          <div className='Login__container'>
            <h2 className='Login__title'>Рады видеть!</h2>
            <form
              className='Login__form'
              name='Login__form'
              onSubmit={() => console.log("Submit")}
            >
              <fieldset className='Login__input-container'>
                {/* Поле ввода: Почта*/}
                <label htmlFor="email" className='Login__input-label'>E-mail</label>
                <input
                  type="email"
                  className='Login__input'
                  id="email"
                  name="email"
                  placeholder="Введите E-mail"
                  required
                  minLength="5"
                  maxLength="100"
                  onChange={() => console.log("!")} />
                <span id="email-error" className="Login__error"></span>
                {/* Поле ввода: Пароль*/}
                <label htmlFor="password" className='Login__input-label'>Пароль</label>
                <input
                  type="password"
                  className='Login__input Login__input_error'
                  id="password"
                  name="password"
                  placeholder="Введите пароль"
                  required
                  minLength="5"
                  maxLength="100"
                  onChange={() => console.log("!")} />
                <span id="password-error" className="Login__error">Что-то пошло не так...</span>
              </fieldset>
              {/* <input type="submit" className='Login__save-button' value='Войти' /> */}

              {/* Временное решение для провекри состояния кнопок */}
              <input type="button" className='Login__save-button Login__save-button_disabled' value='Войти' onClick={() => {
                const button = document.querySelector('.Login__save-button');
                button.classList.toggle('Login__save-button_disabled');
              }} />

            </form>
            <p className="Login__text">Ещё не зарегистрированы? <a className="Login__link" href="/signup">Регистрация</a></p>
          </div>
        </section>
      </main>
    </>
  )
}

export default Login;