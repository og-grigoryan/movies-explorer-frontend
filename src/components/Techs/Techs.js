import React from 'react';

import './Techs.css';
import './Techs__title.css';
import './Techs__subTitle.css';
import './Techs__text.css';
import './Techs__table.css';
import './Techs__table-cell.css';
import './Techs__table-title.css';

function Techs() {
  return (
    <section className="Techs" id="Techs">
      <h2 className="Techs__title">Технологии</h2>
      <h3 className="Techs__subTitle">7 технологий</h3>
      <p className="Techs__text">На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые применили в&nbsp;дипломном проекте.</p>

      {/* таблица с информацией об используемых технологиях */}
      <ul className="Techs__table">
        <li className="Techs__table-cell">
          <p className="Techs__table-title">HTML</p>
        </li>
        <li className="Techs__table-cell">
          <p className="Techs__table-title">CSS</p>
        </li>
        <li className="Techs__table-cell">
          <p className="Techs__table-title">JS</p>
        </li>
        <li className="Techs__table-cell">
          <p className="Techs__table-title">React</p>
        </li>
        <li className="Techs__table-cell">
          <p className="Techs__table-title">Git</p>
        </li>
        <li className="Techs__table-cell">
          <p className="Techs__table-title">Express.js</p>
        </li>
        <li className="Techs__table-cell">
          <p className="Techs__table-title">mongoDB</p>
        </li>
      </ul>
    </section>
  )
}

export default Techs;