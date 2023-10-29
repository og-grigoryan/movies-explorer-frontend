import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard.js";
import Preloader from "../Preloader/Preloader.js";

import "./MoviesCardList.css";
import "./MoviesCardList__list.css";
import "./MoviesCardList__messageNotFound.css";

function MoviesCardList({
  allMovies,
  savedMovies,
  maxCountMoviesElements,
  onSaveButtonClick,
  moviesSearchQuery,
  checkboxStatus,
  isMovieLoading,
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
      ) : allMovies.length ? (
        moviesElements.length ? (
          <ul className="MoviesCardList__list">
            {moviesElements.slice(0, maxCountMoviesElements)}
          </ul>
        ) : (
          <p className="MoviesCardList__messageNotFound">«Ничего не найдено»</p>
        )
      ) : (
        <Preloader />
      )}
      {/* {isMovieLoading ? (
        !moviesElements.length ? (
          <p className="MoviesCardList__messageNotFound">«Ничего не найдено»</p>
        ) : (
          <Preloader />
        )
      ) : !allMovies.length ? (
        <Preloader />
      ) : (
        <ul className="MoviesCardList__list">
          {moviesElements.slice(0, maxCountMoviesElements)}
        </ul>
      )} */}
    </section>
  );
}

export default MoviesCardList;