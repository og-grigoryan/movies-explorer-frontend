import React from 'react';
import { useNavigate } from "react-router-dom";
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
import './Login__error-message.css';
import './Login__error.css';
import './Login__link.css';

function Login({ onLoginUser, userLoginError, loggedIn }) {
  const navigate = useNavigate();

  const [email, setEmail] = React.useState('');
  const [emailTouch, setEmailTouch] = React.useState(false);
  const [emailError, setEmailError] = React.useState('E-mail не может быть пустым');

  const [password, setPassword] = React.useState('');
  const [passwordTouch, setPasswordTouch] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState('Пароль не может быть пустым');

  const [isFormValid, setIsFormValid] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(userLoginError);

  React.useEffect(() => {
    if(loggedIn){
      navigate("/", { replace: true });
    }
  }, [loggedIn]);


  React.useEffect(() => {
    // получаем сообщение об ошибке при обработке запроса
    if (userLoginError === 'Ошибка: 401') {
      setErrorMessage('Вы ввели неправильный логин или пароль.');
    } else if (userLoginError === 'Ошибка: 500') {
      setErrorMessage('На сервере произошла ошибка.');
    } else if (userLoginError !== '') {
      setErrorMessage('При авторизации произошла ошибка.');
    }
  }, [userLoginError]);

  React.useEffect(() => {
    if (emailError || passwordError) {
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
    }

  }, [emailError, passwordError]);

  function handleBlurInput(e) {
    switch (e.target.name) {
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

  function handleSubmitLoginForm(e) {
    e.preventDefault();
    onLoginUser({ email, password });
  }

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
              onSubmit={handleSubmitLoginForm}
            >
              <fieldset className='Login__input-container'>

                {/* Поле ввода: Почта*/}
                <label htmlFor="email" className='Login__input-label'>E-mail</label>
                <input
                  type="email"
                  className={
                    (emailTouch && emailError)
                      ? 'Login__input Login__input_error'
                      : 'Login__input'
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
                    ? <span id="email-error" className="Login__error">{emailError}</span>
                    : <span id="email-error" className="Login__error"></span>
                }

                {/* Поле ввода: Пароль*/}
                <label htmlFor="password" className='Login__input-label'>Пароль</label>
                <input
                  type="password"
                  className={
                    (passwordTouch && passwordError)
                      ? 'Login__input Login__input_error'
                      : 'Login__input'
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
                    ? <span id="password-error" className="Login__error">{passwordError}</span>
                    : <span id="password-error" className="Login__error"></span>
                }
              </fieldset>

              {/*строка вывода для ошибок при входе*/}
              <p className="Login__error-message">{errorMessage}</p>

              {/* Кнопка отправки формы*/}
              <input
                type="submit"
                disabled={!isFormValid}
                value='Войти'
                className={
                  (!isFormValid)
                    ? 'Login__save-button Login__save-button_disabled'
                    : 'Login__save-button'
                }
              />
            </form>
            <p className="Login__text">Ещё не зарегистрированы? <a className="Login__link" href="/signup">Регистрация</a></p>
          </div>
        </section>
      </main>
    </>
  )
}

export default Login;