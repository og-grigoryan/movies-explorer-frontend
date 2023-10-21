import React from 'react';
import Header from '../Header/Header.js';

import './Register__container.css';
import './Register__title.css';
import './Register__form.css';
import './Register__input-container.css';
import './Register__input-label.css';
import './Register__input.css';
import './Register__input_error.css';
import './Register__save-button.css';
import './Register__save-button_disabled.css';
import './Register__text.css';
import './Register__error.css';
import './Register__link.css';

function Register() {
  return (
    <>
      <Header
        classNameHeader='Header Header_page_authentication'
        classNameLogo='Header__logo Header__logo_page_authentication'
        Navigation={false}
      />
      <main className='content'>
        <section className="Register">
          <div className='Register__container'>
            <h1 className='Register__title'>Добро пожаловать!</h1>
            <form
              className='Register__form'
              name='Register__form'
              onSubmit={() => console.log("Submit")}
            >
              <fieldset className='Register__input-container'>
                {/* Поле ввода: Имя*/}
                <label htmlFor="name" className='Register__input-label'>Имя</label>
                <input
                  type="text"
                  className='Register__input'
                  id="name"
                  name="name"
                  placeholder="Введите ваше имя"
                  required
                  minLength="1"
                  maxLength="100"
                  onChange={() => console.log("!")} />
                <span id="name-error" className="Register__error"></span>
                {/* Поле ввода: Почта*/}
                <label htmlFor="email" className='Register__input-label'>E-mail</label>
                <input
                  type="email"
                  className='Register__input'
                  id="email"
                  name="email"
                  placeholder="Введите E-mail"
                  required
                  minLength="5"
                  maxLength="100"
                  onChange={() => console.log("!")} />
                <span id="email-error" className="Register__error"></span>
                {/* Поле ввода: Пароль*/}
                <label htmlFor="password" className='Register__input-label'>Пароль</label>
                <input
                  type="password"
                  className='Register__input Register__input_error'
                  id="password"
                  name="password"
                  placeholder="Введите пароль"
                  required
                  minLength="5"
                  maxLength="100"
                  onChange={() => console.log("!")} />
                <span id="password-error" className="Register__error">Что-то пошло не так...</span>
              </fieldset>
              {/* <input type="submit" className='Register__save-button ' value='Зарегистрироваться' /> */}

              {/* Временное решение для провекри состояния кнопок */}
              <input type="button" className='Register__save-button Register__save-button_disabled' value='Зарегистрироваться' onClick={() => {
                const button = document.querySelector('.Register__save-button');
                button.classList.toggle('Register__save-button_disabled');
              }} /> 

            </form>
            <p className="Register__text">Уже зарегистрированы? <a className="Register__link" href="/signin">Войти</a> </p>
          </div>
        </section>
      </main>
    </>
  )
}

export default Register;