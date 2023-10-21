import React from 'react';

import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation.js';
import NavigationSite from '../NavigationSite/NavigationSite.js'; /* для теста */
import Promo from '../Promo/Promo.js';
import AboutProject from '../AboutProject/AboutProject.js';
import Techs from '../Techs/Techs.js';
import AboutMe from '../AboutMe/AboutMe.js';
import Footer from '../Footer/Footer';


function Main() {
  return (
    <>
      <Header
        classNameHeader="Header"
        classNameLogo="Header__logo"
        Navigation={Navigation}
      />
      <main className='content'>
        <section className="Main">
          <Promo />
          <AboutProject />
          <Techs />
          <AboutMe />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Main;