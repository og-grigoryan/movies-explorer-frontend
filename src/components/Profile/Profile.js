import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header.js';
import NavigationSite from '../NavigationSite/NavigationSite.js';

import './Profile__container.css';
import './Profile__title.css';
import './Profile__form.css';
import './Profile__input-container.css';
import './Profile__input-label.css';
import './Profile__input.css';
import './Profile__input-data.css';
import './Profile__error.css';
import './Profile__error_visible.css';
import './Profile__save-button.css';
import './Profile__save-button_disabled.css';
import './Profile__save-button_visible.css';
import './Profile__button.css';
import './Profile__button_pink.css';
import './Profile__button_hide.css';


function Profile({ onBurgerMenu }) {
  const navigate = useNavigate();

  function onClickEditButton() {
    document.querySelector('.Profile__save-button').classList.add('Profile__save-button_visible');
    document.querySelector('.Profile__error').classList.add('Profile__error_visible');
    
    let buttons = document.querySelectorAll('.Profile__button');
    for (let i = 0; i < buttons.length; ++i) {
      buttons[i].classList.add('Profile__button_hide');
    }

    let inputs = document.querySelectorAll('.Profile__input');
    for (let i = 0; i < buttons.length; ++i) {
      inputs[i].removeAttribute("disabled");
    }
  }

  function onClicExitButton() {
    navigate("/", { replace: true });
  }

  return (
    <>
      <Header
        classNameHeader='Header'
        classNameLogo='Header__logo'
        Navigation={NavigationSite}
        onBurgerMenu={onBurgerMenu}
      />
      <main className='content'>
        <section className="Profile" aria-label="Профиль пользователя">
          <div className='Profile__container'>
            <h1 className='Profile__title'>Привет, Виталий!</h1>
            <form
              className='Profile__form'
              name='Profile__form'
            >
              <fieldset className='Profile__input-container'>
                {/* Поле ввода: Имя*/}
                <div className='Profile__input-data'>
                  <label htmlFor="name" className='Profile__input-label'>Имя</label>
                  <input
                    type="text"
                    className='Profile__input'
                    id="name"
                    name="name"
                    placeholder="Имя"
                    value="Виталий"
                    minLength="1"
                    maxLength="100"
                    disabled
                  />
                </div>
                {/* Поле ввода: Почта*/}
                <div className='Profile__input-data'>
                  <label htmlFor="email" className='Profile__input-label'>E-mail</label>
                  <input
                    type="email"
                    className='Profile__input'
                    id="email"
                    name="email"
                    placeholder="E-mail"
                    value="pochta@yandex.ru"
                    minLength="5"
                    maxLength="100"
                    disabled />
                </div>
              </fieldset>

              <span id="Profile-error" className="Profile__error">Что-то пошло не так...</span>
              <input type="button" className='Profile__save-button Profile__save-button_disabled' value='Сохранить' onClick={() => {
                const button = document.querySelector('.Profile__save-button');
                button.classList.toggle('Profile__save-button_disabled');
              }} /> 

            </form>
            <button type="button" className="Profile__button" onClick={onClickEditButton}>Редактировать</button>
            <button type="button" className="Profile__button Profile__button_pink" onClick={onClicExitButton}>Выйти из аккаунта</button>
          </div>
        </section>
      </main>
    </>
  )
}

export default Profile;