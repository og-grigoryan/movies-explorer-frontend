import React from 'react';

import Header from '../Header/Header';
import NavigationSite from '../NavigationSite/NavigationSite.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import More from '../More/More.js';
import Footer from '../Footer/Footer';

function Movies({ onBurgerMenu }) {

  return (
    <>
      <Header
        classNameHeader="Header"
        classNameLogo="Header__logo"
        Navigation={NavigationSite}
        onBurgerMenu={onBurgerMenu}
      />
      <main className='content'>
        <section className="Movies">
          <SearchForm />
          <MoviesCardList />
          <More />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Movies;