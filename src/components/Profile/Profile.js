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
import './Profile__input_error.css';
import './Profile__input-data.css';
import './Profile__error.css';
import './Profile__error_visible.css';
import './Profile__error-message.css';
import './Profile__save-button.css';
import './Profile__save-button_disabled.css';
import './Profile__save-button_visible.css';
import './Profile__button.css';
import './Profile__button_pink.css';
import './Profile__button_hide.css';

import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';

function Profile({ onBurgerMenu, onUpdateUser, onSignOutButtonClick, userProfileError }) {
  const navigate = useNavigate();
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState('');
  const [nameTouch, setNameTouch] = React.useState(false);
  const [nameError, setNameError] = React.useState('');

  const [email, setEmail] = React.useState('');
  const [emailTouch, setEmailTouch] = React.useState(false);
  const [emailError, setEmailError] = React.useState('');

  const [isFormValid, setIsFormValid] = React.useState(false);
  const [isValueChange, setIsValueChange] = React.useState(false);
  const [isEditButtonClick, setIsEditButtonClick] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(userProfileError);

  const [classNameButtons, setclassNameButtons] = React.useState('Profile__button');
  const [classNameButtonSave, setclassNameButtonSave] = React.useState('Profile__save-button');
  const [isDisabledInputs, setisDisabledInputs] = React.useState(true);

  React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  React.useEffect(() => {
    if (isFormValid && isValueChange) {
      setclassNameButtonSave('Profile__save-button Profile__save-button_visible');
    } else if (isEditButtonClick) {
      setclassNameButtonSave('Profile__save-button Profile__save-button_visible Profile__save-button_disabled');
    }
  }, [isFormValid, isValueChange, isEditButtonClick]);


  React.useEffect(() => {
    // получаем сообщение об ошибке при обработке запроса
    if (userProfileError === 'Ошибка: 409') {
      setErrorMessage(' Пользователь с таким E-mail уже существует.');
    } else if (userProfileError === 'Ошибка: 500') {
      setErrorMessage('На сервере произошла ошибка.');
    } else if (userProfileError !== '') {
      setErrorMessage('При обновлении данных пользователя произошла ошибка.');
    }
  }, [userProfileError]);


  React.useEffect(() => {
    if (nameError || emailError) {
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
    }

  }, [nameError, emailError]);

  function handleBlurInput(e) {
    switch (e.target.name) {
      case 'name':
        setNameTouch(true);
        break;
      case 'email':
        setEmailTouch(true);
        break;
      default:
        break;
    }
  }

  function handleChangeName(e) {
    // регулярное выражение для валидации Name
    const NAME_REGULAR_EXP = /^[a-zA-Zа-яёА-ЯЁ -]+$/;

    setName(e.target.value);

    if (e.target.value !== currentUser.name) {
      setIsValueChange(true);
    } else {
      setIsValueChange(false);
    }

    if (e.target.value.length < 2 || e.target.value.length > 30) {
      setNameError('Имя может быть не менее 2 символов и не более 30 символов');
    } else if (!NAME_REGULAR_EXP.test((e.target.value))) {
      setNameError('Имя может сотоять только из букв, тире и пробелов');
    } else {
      setNameError('');
    }
  }

  function handleChangeEmail(e) {
    // регулярное выражение для валидации E-MAIL
    const EMAIL_REGULAR_EXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

    setEmail(e.target.value);

    if (e.target.value !== currentUser.email) {
      setIsValueChange(true);
    } else {
      setIsValueChange(false);
    }

    if (!EMAIL_REGULAR_EXP.test((e.target.value).toLowerCase())) {
      setEmailError('Некорректный емайл');
    } else {
      setEmailError('');
    }
  }

  function onClickEditButton() {
    setIsEditButtonClick(true);
    setclassNameButtons('Profile__button Profile__button_hide');
    setclassNameButtonSave('Profile__save-button Profile__save-button_visible Profile__save-button_disabled');
    setisDisabledInputs(false);
  }

  function handleSubmitUpdateForm(e) {
    e.preventDefault();
    setclassNameButtons('Profile__button');
    setclassNameButtonSave('Profile__save-button');
    setisDisabledInputs(true);
    setIsEditButtonClick(false);
    setIsValueChange(false)

    onUpdateUser({ name, email });
  }

  function onClicExitButton() {
    onSignOutButtonClick();
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
            <h1 className='Profile__title'>Привет, {`${currentUser.name}`}!</h1>
            <form
              className='Profile__form'
              name='Profile__form'
              onSubmit={handleSubmitUpdateForm}
            >
              <fieldset className='Profile__input-container'>

                {/* Поле ввода: Имя*/}
                <div className='Profile__input-data'>
                  <label htmlFor="name" className='Profile__input-label'>Имя</label>
                  <input
                    type="text"
                    className={
                      (nameTouch && nameError)
                        ? 'Profile__input Profile__input_error'
                        : 'Profile__input'
                    }
                    id="name"
                    name="name"
                    placeholder="Имя"
                    defaultValue={currentUser.name}
                    //value={name}
                    minLength="2"
                    maxLength="30"
                    disabled={isDisabledInputs}
                    onBlur={handleBlurInput}
                    onChange={handleChangeName}
                  />
                  {
                    (nameTouch && nameError)
                      ? <span id="name-error" className="Profile__error">{nameError}</span>
                      : <span id="name-error" className="Profile__error"></span>
                  }
                </div>


                {/* Поле ввода: Почта*/}
                <div className='Profile__input-data'>
                  <label htmlFor="email" className='Profile__input-label'>E-mail</label>
                  <input
                    type="email"
                    // className='Profile__input'
                    className={
                      (emailTouch && emailError)
                        ? 'Profile__input Profile__input_error'
                        : 'Profile__input'
                    }
                    id="email"
                    name="email"
                    placeholder="E-mail"
                    defaultValue={currentUser.email}
                    //value={email}
                    minLength="5"
                    maxLength="100"
                    disabled={isDisabledInputs}
                    onBlur={handleBlurInput}
                    onChange={handleChangeEmail}
                  />
                  {
                    (emailTouch && emailError)
                      ? <span id="email-error" className="Profile__error">{emailError}</span>
                      : <span id="email-error" className="Profile__error"></span>
                  }
                </div>
              </fieldset>

              {/*строка вывода для ошибок при регистрации*/}
              <p className="Profile__error-message">{errorMessage}</p>

              {/* Кнопка отправки формы*/}
              <input
                type="submit"
                disabled={!isFormValid || !isValueChange}
                value='Сохранить'
                className={classNameButtonSave}
              />

            </form>
            <button type="button" className={classNameButtons} onClick={onClickEditButton}>Редактировать</button>
            <button type="button" className={`${classNameButtons} Profile__button_pink`} onClick={onClicExitButton}>Выйти из аккаунта</button>
          </div>
        </section>
      </main>
    </>
  )
}

export default Profile;