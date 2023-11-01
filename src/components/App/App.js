import React from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

import moviesApi from '../../utils/MoviesApi.js';
import mainApi from '../../utils/MainApi.js';

import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import Page404 from '../Page404/Page404.js';
import BurgerMenuPopUp from '../BurgerMenuPopUp/BurgerMenuPopUp.js';
import SuccessUpdateProfilePopUp from '../SuccessUpdateProfilePopUp/SuccessUpdateProfilePopUp.js';

import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js';
import { useEffect } from 'react';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isBurgerMenuPopupOpen, setIsBurgerMenuPopupOpen] = React.useState(false);
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = React.useState(false);

  const [allMovies, setAllMovies] = React.useState(JSON.parse(localStorage.getItem('allMovies')) || []);
  const [sortedMovies, setSortedMovies] = React.useState(JSON.parse(localStorage.getItem('sortedMovies')) || []);
  const [savedMovies, setSavedMovies] = React.useState(JSON.parse(localStorage.getItem('savedMovies')) || []);
  const [savedSortedMovies, setSavedSortedMovies] = React.useState(JSON.parse(localStorage.getItem('savedSortedMovies')) || []);
  const [moviesSearchQuery, setMoviesSearchQuery] = React.useState(localStorage.getItem('moviesSearchQuery') || '');
  const [checkboxStatus, setCheckboxStatus] = React.useState(JSON.parse(localStorage.getItem('checkboxStatus')) || false);

  const [emptyMoviesList, setEmptyMoviesList] = React.useState('');
  const [emptySavedList, setEmptySavedList] = React.useState('');

  const [moviesSearchQueryForSavedMovies, setMoviesSearchQueryForSavedMovies] = React.useState('');
  const [checkboxStatusForSavedMovies, setCheckboxStatusForSavedMovies] = React.useState(false);

  const [maxCountMoviesElementsUpdate, setMaxCountMoviesElementsUpdate] = React.useState(12);

  const [userData, setUserData] = React.useState({});

  const [userRegData, setUserRegData] = React.useState({});
  const [userloginData, setUserloginData] = React.useState({});

  const [userRegError, setUserRegError] = React.useState('');
  const [userLoginError, setUserLoginError] = React.useState('');
  const [userProfileError, setUserProfileError] = React.useState('');

  const [isMovieLoading, setIsMovieLoading] = React.useState(false);

  let emptyArray = [];
  let screenWidth = window.screen.width;

  React.useEffect(() => {
    checkToken();
  }, []);

  React.useEffect(() => {
    if (loggedIn) {
      const token = `Bearer ${localStorage.getItem('jwt')}`;
      Promise.all([mainApi.getUser(token), mainApi.getMovie(token)])
        .then(([userData, savedMovies]) => {
          setUserData(userData);
          setSavedMovies(savedMovies);
          setSavedSortedMovies(savedMovies);

          // проверяем заходил ли пользователь по URL, если да, перенаправляем его по указанному пути.
          if (location.state?.from) {
            navigate(`${location.state.from.pathname}`, { replace: true });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);

  React.useEffect(() => {
    // устанавливаем маскимальное количество отображаемых карточек в зависимости от ширины экрана
    if (screenWidth >= 1280) {
      setMaxCountMoviesElementsUpdate(12);
    }
    if (screenWidth < 1280 && screenWidth >= 767) {
      setMaxCountMoviesElementsUpdate(8);
    }
    if (screenWidth < 767) {
      setMaxCountMoviesElementsUpdate(5);
    }
    // console.log("ВЫБОРКА ФИЛЬМОВ:", sortedMovies.length);
    // console.log("максимум:", maxCountMoviesElementsUpdate);
  }, [sortedMovies]);

  window.addEventListener('resize', () => {
    let NewScreenWidth = window.screen.width;
    setTimeout(() => {
      if (NewScreenWidth >= 1280) {
        if (maxCountMoviesElementsUpdate < 12) {
          setMaxCountMoviesElementsUpdate(12);
        } else {
          setMaxCountMoviesElementsUpdate(maxCountMoviesElementsUpdate + (3 - (maxCountMoviesElementsUpdate % 3)));
        }
      }
      if (NewScreenWidth < 1280 && NewScreenWidth >= 767) {
        if (maxCountMoviesElementsUpdate < 8) {
          setMaxCountMoviesElementsUpdate(8);
        } else {
          setMaxCountMoviesElementsUpdate(maxCountMoviesElementsUpdate + (2 - (maxCountMoviesElementsUpdate % 2)));
        }
      }
    }, 1000);
  });

  // проверяем есть ли данные пользовителя в локальном хранилище
  const checkToken = () => {
    if (localStorage.getItem('jwt')) {
      const token = `Bearer ${localStorage.getItem('jwt')}`;
      mainApi
        .getUser(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            setUserData(res);
            // checkLocalStorage();
            //navigate("/movies", { replace: true });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  // REGISTER USER
  const handleRegisrtationUser = (registrationData) => {
    mainApi
      .registrationUser(registrationData)
      .then(() => {
        handleLoginUser(registrationData);
        setUserRegError('');
      })
      .catch((err) => {
        console.log(err);
        setUserRegError(err);
      });
  };

  // LOGIN USER
  const handleLoginUser = (loginData) => {
    mainApi
      .loginUser(loginData)
      .then((res) => {
        localStorage.setItem('jwt', res.token);
        setUserData(res.user);
        setLoggedIn(true);
        setUserLoginError('');
        navigate('/movies', { replace: true });

        // localStorage.setItem('jwt', res.token)
        // // получаем данные пользователя из БД
        // mainApi.getUser(`Bearer ${res.token}`)
        //   .then((userData) => {
        //     setUserData(userData);
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   });
      })
      .catch((err) => {
        console.log(err);
        setUserLoginError(err);
      });
  };

  // UPDATE USER
  const handleUpdateUser = (newUserData) => {
    const token = `Bearer ${localStorage.getItem('jwt')}`;
    // console.log(newUserData);
    mainApi
      .updateUser(newUserData, token)
      .then((res) => {
        setUserData(newUserData);
        setUserProfileError('');
        setIsSuccessPopupOpen(true);
      })
      .catch((err) => {
        setUserProfileError(err);
      });
  };

  // SIGNOUT USER
  const handleSignOutButtonClick = () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('sortedMovies');
    localStorage.removeItem('moviesSearchQuery');
    localStorage.removeItem('checkboxStatus');

    setLoggedIn(false);

    setMoviesSearchQuery('');
    setCheckboxStatus(false);

    setMoviesSearchQueryForSavedMovies('');
    setCheckboxStatusForSavedMovies(false);

    setAllMovies(emptyArray);
    setSavedMovies(emptyArray);
    setSortedMovies(emptyArray);
  };

  // MOVIES
  // создаём список отсортированных фильмов и записываем его в localStorage
  const makeSortedMoviesArray = (allMovies, searchFormMovie, checkboxStatus) => {
    const sortedMoviesArray = [];

    // критерии отбора по ключевому слову в названии и году выпуска фильма (короткометражные)
    if (checkboxStatus) {
      allMovies.forEach((movie) => {
        if (
          (movie.nameRU.toLowerCase().includes(searchFormMovie.toLowerCase()) || movie.year.includes(searchFormMovie)) &&
          movie.duration < 40
        ) {
          sortedMoviesArray.push(movie);
        }
      });
    } else {
      // критерии отбора по ключевому слову в названии и году выпуска фильма
      allMovies.forEach((movie) => {
        if (movie.nameRU.toLowerCase().includes(searchFormMovie.toLowerCase()) || movie.year.includes(searchFormMovie)) {
          sortedMoviesArray.push(movie);
        }
      });
    }

    if (sortedMoviesArray.length === 0) {
      setEmptyMoviesList('Ничего не найдено');
    } else {
      setEmptyMoviesList('');
    }

    setSortedMovies(sortedMoviesArray);
    localStorage.setItem('sortedMovies', JSON.stringify(sortedMoviesArray));
  };

  // создаём список отсортированных сохраненных фильмов
  const makeSortedSavedMoviesArray = (savedMovies, searchFormMovie, checkboxStatus) => {
    const sortedMoviesArray = [];

    // если пустой запрос то ищем только короткометражки
    if (searchFormMovie === undefined) {
      searchFormMovie = '';
    }

    // критерии отбора по ключевому слову в названии и году выпуска фильма (короткометражные)
    if (checkboxStatus) {
      savedMovies.forEach((movie) => {
        if (
          (movie.nameRU.toLowerCase().includes(searchFormMovie.toLowerCase()) || movie.year.includes(searchFormMovie)) &&
          movie.duration < 40
        ) {
          sortedMoviesArray.push(movie);
        }
      });
    } else {
      // критерии отбора по ключевому слову в названии и году выпуска фильма
      savedMovies.forEach((movie) => {
        if (movie.nameRU.toLowerCase().includes(searchFormMovie.toLowerCase()) || movie.year.includes(searchFormMovie)) {
          sortedMoviesArray.push(movie);
        }
      });
    }

    if (sortedMoviesArray.length === 0) {
      setEmptySavedList('Ничего не найдено');
    } else {
      setEmptySavedList('');
    }

    setSavedSortedMovies(sortedMoviesArray);
  };

  const handleBurgerMenuClick = () => {
    setIsBurgerMenuPopupOpen(true);
  };

  const closePopups = () => {
    setIsBurgerMenuPopupOpen(false);
    setIsSuccessPopupOpen(false);
  };

  const handleMoreComponentButtonClick = () => {
    let screenWidth = window.screen.width;

    if (screenWidth >= 1280) {
      setMaxCountMoviesElementsUpdate(maxCountMoviesElementsUpdate + 3);
    }
    if (screenWidth < 1280 && screenWidth >= 767) {
      setMaxCountMoviesElementsUpdate(maxCountMoviesElementsUpdate + 2);
    }
    if (screenWidth < 767) {
      setMaxCountMoviesElementsUpdate(maxCountMoviesElementsUpdate + 2);
    }
  };

  // SAVED MOVIES
  const handleMoviesCardSaveButtonClick = (movies, isSaved) => {
    const token = `Bearer ${localStorage.getItem('jwt')}`;
    // проверяем есть ли значок лайк на карточке с фильмом
    if (!isSaved) {
      // записываем сохраненный фильм в базу данных
      mainApi
        .saveMovie(movies, token)
        .then((res) => {
          setSavedMovies([movies, ...savedMovies]);
          setSavedSortedMovies([movies, ...savedMovies]);
          localStorage.setItem('savedMovies', JSON.stringify([movies, ...savedMovies]));
          localStorage.setItem('savedSortedMovies', JSON.stringify([movies, ...savedMovies]));
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      mainApi
        .deleteMovie(movies.id, token)
        .then((res) => {
          // console.log(res);
          const updateSavedMovies = savedMovies.filter((c) => c.nameRU !== movies.nameRU);
          setSavedMovies(updateSavedMovies);
          setSavedSortedMovies(updateSavedMovies);
          localStorage.setItem('savedMovies', JSON.stringify(updateSavedMovies));
          localStorage.setItem('savedSortedMovies', JSON.stringify(updateSavedMovies));
        })

        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleMoviesCardDeleteButtonClick = (movies, isSaved, moviesSearchQuery, checkboxStatus) => {
    const token = `Bearer ${localStorage.getItem('jwt')}`;

    // console.log("movies_ID", movies);

    let moviesToDelete = '';

    if (movies.movieId) {
      moviesToDelete = movies.movieId;
    } else {
      moviesToDelete = movies.id;
    }

    mainApi
      .deleteMovie(moviesToDelete, token)
      .then((res) => {
        // console.log(res);
      })
      .then(() => {
        const updateSavedMovies = savedMovies.filter((c) => c.nameRU !== movies.nameRU);
        setSavedMovies(updateSavedMovies);
        // setSavedSortedMovies(updateSavedMovies);
        makeSortedSavedMoviesArray(updateSavedMovies, moviesSearchQueryForSavedMovies, checkboxStatusForSavedMovies);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //SEARCH FORM SUBMIT
  const handleSearchFormSubmitButtonClick = (searchFormMovie, checkboxStatus) => {
    setIsMovieLoading(true);

    if (allMovies.length > 0) {
      makeSortedMoviesArray(allMovies, searchFormMovie, checkboxStatus);

      setMoviesSearchQuery(searchFormMovie);
      localStorage.setItem('moviesSearchQuery', searchFormMovie);

      setCheckboxStatus(checkboxStatus);
      localStorage.setItem('checkboxStatus', checkboxStatus);

      setIsMovieLoading(false);
    } else {
      // получаем даные и записываем их в localStorage
      moviesApi
        .getMovies()
        .then((movies) => {
          setAllMovies(movies);
          localStorage.setItem('allMovies', JSON.stringify(movies));

          makeSortedMoviesArray(movies, searchFormMovie, checkboxStatus);

          setMoviesSearchQuery(searchFormMovie);
          localStorage.setItem('moviesSearchQuery', searchFormMovie);

          setCheckboxStatus(checkboxStatus);
          localStorage.setItem('checkboxStatus', checkboxStatus);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsMovieLoading(false);
        });
    }
  };

  //SEARCH FORM SUBMIT SAVED MOVIE
  const handleSearchFormSavedMoviesSubmitButtonClick = (searchFormMovie, checkboxStatus) => {
    setCheckboxStatusForSavedMovies(checkboxStatus);
    setMoviesSearchQueryForSavedMovies(searchFormMovie);
    makeSortedSavedMoviesArray(savedMovies, searchFormMovie, checkboxStatus);
  };

  return (
    <CurrentUserContext.Provider value={userData}>
      <Routes>
        <Route path="/" element={<Main loggedIn={loggedIn} onBurgerMenu={handleBurgerMenuClick} />} />
        <Route
          path="/movies"
          element={
            <ProtectedRoute
              Component={Movies}
              loggedIn={loggedIn}
              onBurgerMenu={handleBurgerMenuClick}
              allMovies={sortedMovies}
              savedMovies={savedMovies}
              moviesSearchQuery={moviesSearchQuery}
              checkboxStatus={checkboxStatus}
              maxCountMoviesElements={maxCountMoviesElementsUpdate}
              isMovieLoading={isMovieLoading}
              onSearchFormSubmitButtonClick={handleSearchFormSubmitButtonClick}
              onMoreButtonClick={handleMoreComponentButtonClick}
              onSaveButtonClick={handleMoviesCardSaveButtonClick}
              emptyCardList={emptyMoviesList}
              //emptyMoviesList emptySavedList
            />
          }
        />
        <Route
          path="/saved-movies"
          element={
            <ProtectedRoute
              Component={SavedMovies}
              loggedIn={loggedIn}
              onBurgerMenu={handleBurgerMenuClick}
              allMovies={savedSortedMovies}
              onSaveButtonClick={handleMoviesCardDeleteButtonClick}
              onSearchFormSubmitButtonClick={handleSearchFormSavedMoviesSubmitButtonClick}
              moviesSearchQuery={moviesSearchQueryForSavedMovies}
              checkboxStatus={checkboxStatusForSavedMovies}
              emptyCardList={emptySavedList}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute
              Component={Profile}
              loggedIn={loggedIn}
              onUpdateUser={handleUpdateUser}
              onBurgerMenu={handleBurgerMenuClick}
              onSignOutButtonClick={handleSignOutButtonClick}
              userProfileError={userProfileError}
            />
          }
        />
        <Route
          path="/signup"
          element={<Register onRegistrationUser={handleRegisrtationUser} userRegError={userRegError} loggedIn={loggedIn} />}
        />
        <Route path="/signin" element={<Login onLoginUser={handleLoginUser} userLoginError={userLoginError} loggedIn={loggedIn} />} />
        <Route path="*" element={<Page404 />} />
      </Routes>

      <BurgerMenuPopUp isOpen={isBurgerMenuPopupOpen} onClose={closePopups} />

      <SuccessUpdateProfilePopUp isOpen={isSuccessPopupOpen} onClose={closePopups} />
    </CurrentUserContext.Provider>
  );
}

export default App;
