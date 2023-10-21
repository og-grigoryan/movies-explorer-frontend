import React from 'react';

import './AboutProject.css'
import './AboutProject__title.css'
import './AboutProject__infoTable.css'
import './AboutProject__infoTable-cell.css'
import './AboutProject__infoTable-title.css'
import './AboutProject__infoTable-text.css'
import './AboutProject__grafikTable.css'
import './AboutProject__grafikTable-cell.css'
import './AboutProject__grafikTable-title.css'
import './AboutProject__grafikTable-title_green.css'
import './AboutProject__grafikTable-text.css'

function AboutProject() {
  return (
    <section className="AboutProject" id="AboutProject">
      <h2 className="AboutProject__title">О проекте</h2>
  
      {/* таблица с информацией о проекте */}
      <ul className="AboutProject__infoTable">
        <li className="AboutProject__infoTable-cell">
          <h3 className="AboutProject__infoTable-title">Дипломный проект включал 5 этапов</h3>
          <p className="AboutProject__infoTable-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className="AboutProject__infoTable-cell">
          <h3 className="AboutProject__infoTable-title">На выполнение диплома ушло 5 недель</h3>
          <p className="AboutProject__infoTable-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>

      {/* таблица с графиком работ на проекте */}
      <ul className="AboutProject__grafikTable">
        <li className="AboutProject__grafikTable-cell">
          <p className="AboutProject__grafikTable-title AboutProject__grafikTable-title_green">1 неделя</p>
          <p className="AboutProject__grafikTable-text">Back-end</p>
        </li>
        <li className="AboutProject__grafikTable-cell">
          <p className="AboutProject__grafikTable-title">4 недели</p>
          <p className="AboutProject__grafikTable-text">Front-end</p>
        </li>
      </ul>
    </section>
  )
}

export default AboutProject;