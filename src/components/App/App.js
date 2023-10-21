import React from 'react';
// import { Routes, Route, useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import Page404 from '../Page404/Page404.js';
import BurgerMenuPopUp from '../BurgerMenuPopUp/BurgerMenuPopUp.js';


function App() {
  const [isBurgerMenuPopupOpen, setIsBurgerMenuPopupOpen] = React.useState(false);

  const handleBurgerMenuClick = () => {
    setIsBurgerMenuPopupOpen(true);
  }

  const closePopups = () => {
    setIsBurgerMenuPopupOpen(false);
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Main />}
        />
        <Route
          path="/movies"
          element={<Movies
            onBurgerMenu={handleBurgerMenuClick}
          />}
        />
        <Route
          path="/saved-movies"
          element={<SavedMovies
            onBurgerMenu={handleBurgerMenuClick}
          />}
        />
        <Route
          path="/profile"
          element={<Profile
            onBurgerMenu={handleBurgerMenuClick}
          />}
        />
        <Route
          path="/signup"
          element={<Register />}
        />
        <Route
          path="/signin"
          element={<Login />}
        />
        <Route
          path="*"
          element={<Page404 />}
        />
      </Routes>

      <BurgerMenuPopUp
        isOpen={isBurgerMenuPopupOpen}
        onClose={closePopups} />
    </>
  );
}

export default App;