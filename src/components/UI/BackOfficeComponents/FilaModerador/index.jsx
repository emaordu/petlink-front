import React from "react";
import * as classes from "./FilaModerador.module.css";

export const FilaModerador = ({ className }) => {
  return (
    <div className={`${classes.container} ${className || ""}`}>
      <div className={classes.cellId}>ID</div>
      <div className={classes.cellEmail}>Email</div>
      <div className={classes.cellEstado}>Estado</div>
      <div className={classes.cellAcciones}>Acciones</div>
    </div>
  );
};

export default FilaModerador;