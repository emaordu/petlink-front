import React from "react";
import * as classes from "./CardsMetricas.module.css";

export const CardsMetricas = ({ className, title = "Titulo metrica", value = "12345", onClick }) => {
  return (
    <article
      className={`${classes.container} ${className || ""}`}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={onClick ? (e) => { if (e.key === "Enter") onClick(); } : undefined}
      aria-label={title}
    >
      <div className={classes.header}>
        <div className={classes.title}>{title}</div>
      </div>
      <div className={classes.body}>
        <div className={classes.value}>{value}</div>
      </div>
    </article>
  );
};

export default CardsMetricas;