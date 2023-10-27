import React from 'react';

import './More.css';
import './More__button.css';

function More({ onMoreButtonClick }) {

  function handleMoreButtonClick() {
    onMoreButtonClick();
  }

  return (
      <section className="More" aria-label="Добавить ещё">
        <button type="button" className="More__button" onClick={handleMoreButtonClick}>Ещё</button>
      </section>
  )
}

export default More;