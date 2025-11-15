import React from "react";
import * as classes from "./FilaUsuario.module.css";

export const FilaUsuario = ({ className }) => {
  return (
    <div className={`${classes.container} ${className || ""}`}>
      <div className={classes.cellId}>ID</div>
      <div className={classes.cellEmail}>Email</div>
      <div className={classes.cellRol}>Rol</div>
      <div className={classes.cellAcciones}>Acciones</div>
    </div>
  );
};

export default FilaUsuario;