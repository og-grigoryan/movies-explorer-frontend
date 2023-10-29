import React from 'react';

import Header from '../Header/Header';
import NavigationSite from '../NavigationSite/NavigationSite.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import SearchForm from '../SearchForm/SearchForm.js';
import Footer from '../Footer/Footer';

function SavedMovies({ onBurgerMenu, allMovies, onSaveButtonClick, onSearchFormSubmitButtonClick, moviesSearchQuery, checkboxStatus }) {
  React.useEffect(() => {
    onSearchFormSubmitButtonClick();
  }, []);

  return (
    <>
      <Header
        classNameHeader="Header"
        classNameLogo="Header__logo"
        Navigation={NavigationSite}
        onBurgerMenu={onBurgerMenu}
      />
      <main className='content'>
        <section className="SavedMovies">
          <SearchForm
            onSearchFormSubmitButtonClick={onSearchFormSubmitButtonClick}
            moviesSearchQuery={moviesSearchQuery}
            checkboxStatus={checkboxStatus}
          />
          <MoviesCardList
            allMovies={allMovies}
            onSaveButtonClick={onSaveButtonClick}
            moviesSearchQuery={moviesSearchQuery}
            checkboxStatus={checkboxStatus}
          />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies;