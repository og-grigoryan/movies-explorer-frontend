import React from 'react';
import searchIcon from "../../images/saerchIcon.svg";

import './SearchForm.css';
import './SearchForm__form.css';
import './SearchForm__container.css';
import './SearchForm__input-movie.css';
import './SearchForm__search-button.css';
import './SearchForm__checkbox-container.css';
import './SearchForm__label-shortFilms.css';
import './SearchForm__checkbox-shortFilms.css';
import './SearchForm__switch-shortFilms.css';
import './SearchForm__switch-shortFilms_checked.css';
import './SearchForm__text-shortFilms.css';

function SearchForm({ onSearchFormSubmitButtonClick, moviesSearchQuery, checkboxStatus, allMovies }) {
  const [searchFormMovie, setSearchFormMovie] = React.useState("");
  const [searchFormCheckbox, setSearchFormCheckbox] = React.useState(false);

  React.useEffect(() => {
    setSearchFormMovie(moviesSearchQuery);
  }, [moviesSearchQuery]);

  React.useEffect(() => {
    setSearchFormCheckbox(checkboxStatus);
  }, [checkboxStatus]);


  function handleChangeSearchFormMovie(e) {
    setSearchFormMovie(e.target.value);
  }

  function handleChangeSearchFormMCheckbox() {
    setSearchFormCheckbox(!searchFormCheckbox);
    onSearchFormSubmitButtonClick(searchFormMovie, !searchFormCheckbox);
    // if (!(moviesSearchQuery === '')) {
    //   onSearchFormSubmitButtonClick(searchFormMovie, !searchFormCheckbox);
    // }
  }

  function handleSubmitSearchForm(e) {
    e.preventDefault();
    onSearchFormSubmitButtonClick(searchFormMovie, searchFormCheckbox);
  }

  return (
    <section className="SearchForm" aria-label="Поиск фильмов">
      {/* форма поиска фильмов */}
      <form className="SearchForm__form" name="searchForm" onSubmit={handleSubmitSearchForm}>
        <div className="SearchForm__container">
          <input
            type="text"
            className="SearchForm__input-movie"
            id="movie"
            name="movie"
            placeholder="Фильм"
            // required
            // minLength="1"
            onChange={handleChangeSearchFormMovie}
            value={searchFormMovie || ''}
          //defaultValue={moviesSearchQuery || ''}
          />
          <input type="submit" className="SearchForm__search-button" value="" />
        </div>
        {/* чек-бокс для выбора короткометражек */}
        <div className="SearchForm__checkbox-container">
          <label className="SearchForm__label-shortFilms">
            <input
              className="SearchForm__checkbox-shortFilms"
              id="shortFilms"
              type="checkbox"
              name="shortFilms"
              defaultChecked={checkboxStatus}
              onChange={handleChangeSearchFormMCheckbox}
              value="shortFilms"
            />
            <span className={`SearchForm__switch-shortFilms ${searchFormCheckbox && 'SearchForm__switch-shortFilms_checked'}`}></span>
          </label>
          <p className="SearchForm__text-shortFilms">Короткометражки</p>
        </div>
      </form>
    </section>
  )
}

export default SearchForm;

