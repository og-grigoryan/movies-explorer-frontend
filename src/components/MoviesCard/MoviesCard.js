import React from 'react';
import { useLocation } from 'react-router-dom';

import './MoviesCard.css';
import './MoviesCard__container.css';
import './MoviesCard__title.css';
import './MoviesCard__time.css';
import './MoviesCard__link.css';
import './MoviesCard__image.css';
import './MoviesCard__save-button.css';
import './MoviesCard__save-button_active.css';
import './MoviesCard__save-button_delete.css';

function MoviesCard({ movies, onSaveButtonClick, savedMovies, moviesSearchQuery, checkboxStatus }) {
  const location = useLocation();
  let isSaved = false;

  if (location.pathname === "/movies") {
    savedMovies.forEach(() => {
      isSaved = savedMovies.some(i => i.nameRU === movies.nameRU);
    });
  } else {
    isSaved = true;
  }

  // перевод минут в формат ..ч..м
  const minutes = movies.duration;
  let m = minutes % 60;
  let h = (minutes - m) / 60;
  let time = h.toString() + "ч " + (m < 10 ? "0" : "") + m.toString() + "м";

  const MoviesCardSaveButtonClassName = (
    `MoviesCard__save-button ${isSaved && 'MoviesCard__save-button_active'} ${location.pathname === "/saved-movies" && 'MoviesCard__save-button_delete'}`
  );

  function handleSaveButtonClick() {
    onSaveButtonClick(movies, isSaved, moviesSearchQuery, checkboxStatus);
  }

  return (
    // карточка фильма
    <li className="MoviesCard">
      <a className="MoviesCard__link" href={movies.trailerLink} target="_blank" rel="noreferrer">
        <img className="MoviesCard__image"
          alt={`Постер к фильму ${movies.nameRU}`}
          src={ movies.image.url
            ? `https://api.nomoreparties.co/${movies.image.url}`
            : movies.image 
          }
        />
      </a>
      <button type="button"
          className={MoviesCardSaveButtonClassName}
          aria-label="Сохранить"
          onClick={handleSaveButtonClick}
        >
        </button>
      <div className="MoviesCard__container">
        <h2 className="MoviesCard__title">{movies.nameRU}</h2>
        <p className="MoviesCard__time">{time}</p>
      </div>
    </li>
  )
}

export default MoviesCard;