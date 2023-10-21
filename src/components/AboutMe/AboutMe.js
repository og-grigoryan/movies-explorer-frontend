import React from 'react';
import AboutMePhoto from "../../images/photo.jpg";
import Portfolio from '../Portfolio/Portfolio.js';

import './AboutMe.css';
import './AboutMe__title.css';
import './AboutMe__container.css';
import './AboutMe__data.css';
import './AboutMe__name.css';
import './AboutMe__specialization.css';
import './AboutMe__text.css';
import './AboutMe__link.css';
import './AboutMe__photo.css';


function AboutMe() {
  return (
    <section className="AboutMe" id="AboutMe">
      <h2 className="AboutMe__title">Студент</h2>
      <article className="AboutMe__container">
        <div className="AboutMe__data">
          <h3 className="AboutMe__name">Оганес</h3>
          <p className="AboutMe__specialization">Фронтенд-разработчик, 22 года</p>
          <p className="AboutMe__text">Я&nbsp;родился и&nbsp;живу в&nbsp;Москве, учусь на факультете информационной безопасности МГТУ им. Н.Э.Баумана. Я&nbsp;люблю слушать музыку и&nbsp;читать книжки. После разговора с другом&nbsp;начал интересоваться веб-разработкой, понял что тема очень&nbsp;интересная и решил, что буду развивать свои навыки в этой области&nbsp;IT. Знания полученые в&nbsp;процессе обучения позволяют мне уже сейчас делать несложные приложения.</p>
          <a className="AboutMe__link" href="https://github.com/og-grigoryan" target="_blank" rel="noreferrer">Github</a>
        </div>
        <img className="AboutMe__photo" src={AboutMePhoto} alt="Фото студента"></img>
      </article>
      <Portfolio />
    </section>
  )
}

export default AboutMe;