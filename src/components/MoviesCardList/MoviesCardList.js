import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard.js';
import Preloader from '../Preloader/Preloader.js';

import './MoviesCardList.css';
import './MoviesCardList__list.css';
import './MoviesCardList__messageNotFound.css';

function MoviesCardList({
  allMovies,
  savedMovies,
  maxCountMoviesElements,
  onSaveButtonClick,
  moviesSearchQuery,
  checkboxStatus,
  isMovieLoading,
  emptyCardList,
}) {
  const moviesElements = allMovies.map((movies) => (
    <MoviesCard
      movies={movies}
      savedMovies={savedMovies}
      key={movies.id || movies._id}
      onSaveButtonClick={onSaveButtonClick}
      moviesSearchQuery={moviesSearchQuery}
      checkboxStatus={checkboxStatus}
    />
  ));

  return (
    <section className="MoviesCardList" aria-label="Список фильмов">
      {isMovieLoading ? (
        <Preloader />
      ) : emptyCardList ? (
        <p className="MoviesCardList__messageNotFound">{emptyCardList}</p>
      ) : (
        <ul className="MoviesCardList__list">{moviesElements.slice(0, maxCountMoviesElements)}</ul>
      )}
    </section>
  );
}

export default MoviesCardList;
