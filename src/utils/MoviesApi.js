class MoviesApi {
    constructor(options) {
      this._baseUrl = options.baseUrl;
    }
  
    _checkResponse(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  
    getMovies() {
      return fetch(`${this._baseUrl}`,{})
        .then(res => {
          return this._checkResponse(res);
        });
    }
  
  }
  
  /******************** class *******************/
  /* MoviesApi */
  const moviesApi = new MoviesApi({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  });
  
  export default moviesApi;