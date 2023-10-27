import React from 'react';
import SuccessImg from "../../images/success.png";

import './SuccessUpdateProfilePopUp.css';
import './SuccessUpdateProfilePopUp_is-opened.css';
import './SuccessUpdateProfilePopUp__container.css';
import './SuccessUpdateProfilePopUp__button-close.css';
import './SuccessUpdateProfilePopUp__img.css';
import './SuccessUpdateProfilePopUp__title.css';

function SuccessUpdateProfilePopUp({ onClose, isOpen }) {
  return (
    <div className={`SuccessUpdateProfilePopUp ${isOpen ? "SuccessUpdateProfilePopUp_is-opened" : ""}`}>

      <div className={`SuccessUpdateProfilePopUp__container`}>
        <button type="button" className={`popupClose-button SuccessUpdateProfilePopUp__button-close`} onClick={onClose}></button>
        <img className={`SuccessUpdateProfilePopUp__img`}
          src={SuccessImg}
          alt="Успех"
        />
        <h2 className={`SuccessUpdateProfilePopUp__title`}>Данные успешно обновленны!</h2>
      </div>

    </div>
  )
}

export default SuccessUpdateProfilePopUp;