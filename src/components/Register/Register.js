import React from 'react';
import { useNavigate } from "react-router-dom";
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
import './Register__error-message.css';
import './Register__error.css';
import './Register__link.css';

function Register({ onRegistrationUser, userRegError, loggedIn }) {
  const navigate = useNavigate();

  const [name, setName] = React.useState('');
  const [nameTouch, setNameTouch] = React.useState(false);
  const [nameError, setNameError] = React.useState('Имя не может быть пустым');

  const [email, setEmail] = React.useState('');
  const [emailTouch, setEmailTouch] = React.useState(false);
  const [emailError, setEmailError] = React.useState('E-mail не может быть пустым');

  const [password, setPassword] = React.useState('');
  const [passwordTouch, setPasswordTouch] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState('Пароль не может быть пустым');

  const [isFormValid, setIsFormValid] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(userRegError);

  React.useEffect(() => {
    if(loggedIn){
      navigate("/", { replace: true });
    }
  }, [loggedIn]);

  React.useEffect(() => {
    // получаем сообщение об ошибке при обработке запроса
    if (userRegError === 'Ошибка: 409') {
      setErrorMessage('Пользователь с таким E-mail уже существует.');
    } else if (userRegError === 'Ошибка: 500') {
      setErrorMessage('На сервере произошла ошибка.');
    } else if (userRegError !== '') {
      setErrorMessage('При регистрации пользователя произошла ошибка.');
    }
  }, [userRegError]);

  React.useEffect(() => {
    if (nameError || emailError || passwordError) {
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
    }

  }, [nameError, emailError, passwordError]);

  function handleBlurInput(e) {
    switch (e.target.name) {
      case 'name':
        setNameTouch(true);
        break;
      case 'email':
        setEmailTouch(true);
        break;
      case 'password':
        setPasswordTouch(true);
        break;
      default:
        break;
    }
  }

  function handleChangeName(e) {
    setName(e.target.value);

    // регулярное выражение для валидации Name
    const NAME_REGULAR_EXP = /^[a-zA-Zа-яёА-ЯЁ -]+$/;

    if (e.target.value.length < 2 || e.target.value.length > 30) {
      setNameError('Имя может быть не менее 2 символов и не более 30 символов');
    } else if (!NAME_REGULAR_EXP.test((e.target.value))) {
      setNameError('Имя может сотоять только из букв, тире и пробелов');
    } else {
      setNameError('');
    }
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);

    // регулярное выражение для валидации E-MAIL
    const EMAIL_REGULAR_EXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

    if (!EMAIL_REGULAR_EXP.test((e.target.value).toLowerCase())) {
      setEmailError('Некорректный E-mail');
    } else {
      setEmailError('');
    }
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
    if (e.target.value.length < 2 || e.target.value.length > 30) {
      setPasswordError('Пароль должен быть не менее 2 символов и не более 30 символов');
    } else {
      setPasswordError('');
    }
  }

  function handleSubmitRegisterForm(e) {
    e.preventDefault();
    onRegistrationUser({ name, email, password });
  }

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
              onSubmit={handleSubmitRegisterForm}
            >
              <fieldset className='Register__input-container'>

                {/* Поле ввода: Имя*/}
                <label htmlFor="name" className='Register__input-label'>Имя</label>
                <input
                  type="text"
                  className={
                    (nameTouch && nameError)
                      ? 'Register__input Register__input_error'
                      : 'Register__input'
                  }
                  id="name"
                  name="name"
                  placeholder="Введите ваше имя"
                  required
                  minLength="2"
                  maxLength="30"
                  value={name}
                  onBlur={handleBlurInput}
                  onChange={handleChangeName} />
                {
                  (nameTouch && nameError)
                    ? <span id="name-error" className="Register__error">{nameError}</span>
                    : <span id="name-error" className="Register__error"></span>
                }

                {/* Поле ввода: Почта*/}
                <label htmlFor="email" className='Register__input-label'>E-mail</label>
                <input
                  type="email"
                  className={
                    (emailTouch && emailError)
                      ? 'Register__input Register__input_error'
                      : 'Register__input'
                  }
                  id="email"
                  name="email"
                  placeholder="Введите E-mail"
                  required
                  minLength="5"
                  maxLength="100"
                  onBlur={handleBlurInput}
                  onChange={handleChangeEmail} />
                {
                  (emailTouch && emailError)
                    ? <span id="email-error" className="Register__error">{emailError}</span>
                    : <span id="email-error" className="Register__error"></span>
                }

                {/* Поле ввода: Пароль*/}
                <label htmlFor="password" className='Register__input-label'>Пароль</label>
                <input
                  type="password"
                  className={
                    (passwordTouch && passwordError)
                      ? 'Register__input Register__input_error'
                      : 'Register__input'
                  }
                  id="password"
                  name="password"
                  placeholder="Введите пароль"
                  required
                  minLength="2"
                  maxLength="30"
                  onBlur={handleBlurInput}
                  onChange={handleChangePassword} />
                {
                  (passwordTouch && passwordError)
                    ? <span id="password-error" className="Register__error">{passwordError}</span>
                    : <span id="password-error" className="Register__error"></span>
                }
              </fieldset>

              {/*строка вывода для ошибок при регистрации*/}
              <p className="Register__error-message">{errorMessage}</p>

              {/* Кнопка отправки формы*/}
              <input
                type="submit"
                disabled={!isFormValid}
                value='Зарегистрироваться'
                className={
                  (!isFormValid)
                    ? 'Register__save-button Register__save-button_disabled'
                    : 'Register__save-button'
                }
              />
            </form>
            <p className="Register__text">Уже зарегистрированы? <a className="Register__link" href="/signin">Войти</a> </p>
          </div>
        </section>
      </main>
    </>
  )
}

export default Register;