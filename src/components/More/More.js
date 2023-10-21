import React from 'react';

import './More.css';
import './More__button.css';

function More() {
  return (
      <section className="More" aria-label="Добавить ещё">
        <button type="button" className="More__button" onClick={() => console.log("Ещё")}>Ещё</button>
      </section>
  )
}

export default More;