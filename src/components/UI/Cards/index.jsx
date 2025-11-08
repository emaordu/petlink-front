import React from "react";
import * as classes from "./Cards.module.css";

// Tarjeta del feed con estilo acorde al look & feel
export const FeedCard = ({
  title,
  description,
  imageUrl,
  location,
  publishedAt,
  className,
}) => {
  return (
    <article className={`${classes.card} ${className || ""}`}>
      <div className={classes.content}>
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.description}>{description}</p>
        <div className={classes.metaRow}>
          <span className={classes.location}>📍 {location}</span>
          <span className={classes.published}>Publicado hace: {publishedAt}</span>
        </div>
      </div>
      {imageUrl && (
        <div className={classes.imageWrap}>
          <img className={classes.image} src={imageUrl} alt="Imagen de la publicación" />
        </div>
      )}
    </article>
  );
};

// Lista de tarjetas con snap scroll de 4 en 4
export const CardsFeed = ({ items = [] }) => {
  const pages = [];
  for (let i = 0; i < items.length; i += 4) {
    pages.push(items.slice(i, i + 4));
  }

  return (
    <div className={classes.feedContainer}>
      {pages.map((pageItems, idx) => (
        <section key={idx} className={classes.page} aria-label={`Página ${idx + 1}`}>
          <div className={classes.grid}>
            {pageItems.map((it, j) => (
              <FeedCard key={`${idx}-${j}`} {...it} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

// Compatibilidad con nombre previo
export const Cards = FeedCard;