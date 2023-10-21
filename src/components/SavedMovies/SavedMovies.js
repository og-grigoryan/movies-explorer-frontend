import React from 'react';

import Header from '../Header/Header';
import NavigationSite from '../NavigationSite/NavigationSite.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import SearchForm from '../SearchForm/SearchForm.js';
import More from '../More/More.js';
import Footer from '../Footer/Footer';

function SavedMovies({ onBurgerMenu }) {
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
          <SearchForm />
          <MoviesCardList />
          <More />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies;