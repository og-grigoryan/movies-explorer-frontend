import React from 'react';

import Header from '../Header/Header';
import NavigationSite from '../NavigationSite/NavigationSite.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import More from '../More/More.js';
import Footer from '../Footer/Footer';

function Movies({
  onBurgerMenu,
  allMovies,
  savedMovies,
  moviesSearchQuery,
  checkboxStatus,
  maxCountMoviesElements,
  onSearchFormSubmitButtonClick,
  onMoreButtonClick,
  onSaveButtonClick,
  isMovieLoading,
  emptyCardList,
}) {
  return (
    <>
      <Header classNameHeader="Header" classNameLogo="Header__logo" Navigation={NavigationSite} onBurgerMenu={onBurgerMenu} />
      <main className="content">
        <section className="Movies">
          <SearchForm
            onSearchFormSubmitButtonClick={onSearchFormSubmitButtonClick}
            moviesSearchQuery={moviesSearchQuery}
            checkboxStatus={checkboxStatus}
            allMovies={allMovies}
          />
          <MoviesCardList
            allMovies={allMovies}
            savedMovies={savedMovies}
            maxCountMoviesElements={maxCountMoviesElements}
            onSaveButtonClick={onSaveButtonClick}
            moviesSearchQuery={moviesSearchQuery}
            isMovieLoading={isMovieLoading}
            emptyCardList={emptyCardList}
          />
          {allMovies.length > maxCountMoviesElements && <More onMoreButtonClick={onMoreButtonClick} />}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Movies;
