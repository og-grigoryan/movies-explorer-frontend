import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard.js';

import './MoviesCardList.css';
import './MoviesCardList__list.css';


function MoviesCardList() {
  return (
    <section className="MoviesCardList" aria-label="Список фильмов">
      <ul className="MoviesCardList__list">
        <MoviesCard isSaved={false} />
        <MoviesCard isSaved={false} />
        <MoviesCard isSaved={true} />
        <MoviesCard isSaved={false} />
        <MoviesCard isSaved={true} />
        <MoviesCard isSaved={false} />
        <MoviesCard isSaved={false} />
        <MoviesCard isSaved={false} />
        <MoviesCard isSaved={false} />
        <MoviesCard isSaved={true} />
        <MoviesCard isSaved={false} />
        <MoviesCard isSaved={false} />
      </ul>
    </section>
  )
}

export default MoviesCardList;