import React from "react";
import * as classes from "./FilaReporteRow.module.css";
import { BtnSecondary, BtnDanger } from "@/components/UI/Buttons";

export const FilaReporteRow = ({ report, onResolve, onDiscard }) => {
  return (
    <div className={classes.row}>
      <div className={classes.cellId}>{report.id}</div>
      <div className={classes.cellPost}>{report.postTitle}</div>
      <div className={classes.cellReporter}>{report.reporterEmail}</div>
      <div className={classes.cellMotivo}>{report.reason}</div>
      <div className={classes.cellAcciones}>
        <BtnSecondary text="Resolver" size="sm" onClick={() => onResolve?.(report)} />
        <BtnDanger text="Descartar" size="sm" onClick={() => onDiscard?.(report)} />
      </div>
    </div>
  );
};

export default FilaReporteRow;