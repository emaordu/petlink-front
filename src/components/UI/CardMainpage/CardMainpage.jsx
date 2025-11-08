import React from 'react';
import * as classes from './CardMainpage.module.css';

// Card simple y responsivo; mapea props actuales de Inicio
function CardMainpage({
  className,
  divClassName,
  image, // reservado para futuro
  text = '',
  text1 = '',
  text2 = '',
  text3 = '',
}) {
  return (
    <article className={`${classes.card} ${className || ''}`}>
      <div className={`${classes.cardInner} ${divClassName || ''}`}>
        {text && <h3 className={classes.title}>{text}</h3>}
        {text1 && <p className={classes.body}>{text1}</p>}
        {(text2 || text3) && (
          <div className={classes.metaRow}>
            {text2 && <span className={classes.location}>{text2}</span>}
            {text3 && <span className={classes.published}>{text3}</span>}
          </div>
        )}
      </div>
    </article>
  );
}

export { CardMainpage };
export default CardMainpage;