class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._beatFilmUrl = options.beatFilmUrl;
    this._authorization = options.headers.authorization;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  // получаем данные пользователя
  getUser(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        // authorization: this._authorization
        Authorization: `${token}`,
      },
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  // регистрирум нового пользователя
  registrationUser(registrationData) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: registrationData.name,
        email: registrationData.email,
        password: registrationData.password,
      }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  // авторизуем пользователя
  loginUser(loginData) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: loginData.email,
        password: loginData.password,
      }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  // обновляем данные пользователя
  updateUser(newUserData, token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        // authorization: this._authorization
        Authorization: `${token}`,
      },
      body: JSON.stringify({
        name: newUserData.name,
        email: newUserData.email,
      }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  // получаем сохраненные фильмы из БД
  getMovie(token) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      headers: {
        // authorization: this._authorization
        Authorization: `${token}`,
      },
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  // сохраняем фильмы в БД
  saveMovie(saveMovieData, token) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // authorization: this._authorization
        Authorization: `${token}`,
      },
      body: JSON.stringify({
        country: saveMovieData.country,
        director: saveMovieData.director,
        duration: saveMovieData.duration,
        year: saveMovieData.year,
        description: saveMovieData.description,
        image: `${this._beatFilmUrl}${saveMovieData.image.url}`,
        trailerLink: saveMovieData.trailerLink,
        thumbnail: `${this._beatFilmUrl}${saveMovieData.image.formats.thumbnail.url}`,
        movieId: saveMovieData.id,
        nameRU: saveMovieData.nameRU,
        nameEN: saveMovieData.nameEN,
      }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  deleteMovie(movieId, token) {
    return fetch(`${this._baseUrl}/movies/` + movieId, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // authorization: this._authorization
        Authorization: `${token}`,
      },
    }).then((res) => {
      return this._checkResponse(res);
    });
  }
}

/******************** class *******************/
/* MainApi */
const mainApi = new MainApi({
  //baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  baseUrl: 'https://api.movie.grig.nomoredomainsrocks.ru/',
  // baseUrl: 'https://api.movie.grig.nomoredomainsrocks.ru',  //'http://localhost:3000',
  beatFilmUrl: 'https://api.nomoreparties.co/',

  headers: {
    // authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDliY2U1NTQzZjY3MGNhZTk1NDcxOWIiLCJpYXQiOjE2ODc5MzY0MjAsImV4cCI6MTY4ODU0MTIyMH0.jolxzy3ijLIrL0WqtRgd1zA7-HjWsxdYCr3MnzFmVWc',

    'Content-Type': 'application/json',
  },
});

export default mainApi;
