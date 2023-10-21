import React from 'react';
import './Footer.css';
import './Footer__title.css';
import './Footer__text.css';
import './Footer__info-container.css';
import './Footer__copyrights-container.css';
import './Footer__list.css';
import './Footer__list-item.css';
import './Footer__link.css';

function Footer() {
  return (
    <footer className="Footer">
      <p className="Footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="Footer__info-container">
        <div className="Footer__copyrights-container">
          <p className="Footer__text">&copy;&nbsp;{(new Date()).getFullYear()}</p>
        </div>
        <ul className="Footer__list">
          <li className="Footer__list-item">
            <a className="Footer__link" href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
          </li>
          <li className="Footer__links-item">
            <a className="Footer__link" href="https://github.com/og-grigoryan" target="_blank" rel="noreferrer">Github</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;