import React from "react";
import * as classes from "./FilaReport.module.css";

export const FilaReporte = ({ className }) => {
  return (
    <div className={`${classes.container} ${className || ""}`}>
      <div className={classes.cellId}>ID</div>
      <div className={classes.cellPost}>Post</div>
      <div className={classes.cellReporter}>Reportado por</div>
      <div className={classes.cellMotivo}>Motivo</div>
      <div className={classes.cellAcciones}>Acciones</div>
    </div>
  );
};

export default FilaReporte;