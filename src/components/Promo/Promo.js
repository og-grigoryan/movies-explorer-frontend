import React from 'react';
import NavTab from '../NavTab/NavTab.js';

import './Promo.css'
import './Promo__title.css'

function Promo() {
  return (
    <section className="Promo">
      <h1 className="Promo__title">Учебный проект студента факультета Веб-разработки.</h1>
      <NavTab />
    </section>
  )
}

export default Promo;
