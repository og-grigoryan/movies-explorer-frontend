import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Page404.css';
import './Page404__text.css';
import './Page404__title.css';
import './Page404__button.css';

function Page404() {
  const navigate = useNavigate();

  function onClickReturnButton() {
    navigate(-1);
  }

  return (
    <main className='content'>
      <section className="Page404" aria-label="Страница 404">
        <p className="Page404__text">404</p>
        <h1 className="Page404__title">Страница не найдена</h1>
        <button type="button" className="Page404__button" onClick={onClickReturnButton}>Назад</button>
      </section>
    </main>
  )
}

export default Page404;