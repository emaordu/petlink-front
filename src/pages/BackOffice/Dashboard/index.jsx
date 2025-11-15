import React from "react";
import BackOfficeTemplate from "@/components/UI/BackOfficeTemplate";
import { CardsMetricas } from "@/components/UI/CardsMetricas";
import * as classes from "./Dashboard.module.css";

export default function BackOfficeDashboard() {
  return (
    <BackOfficeTemplate>
      <main className={classes.page}>
        <h2 className={classes.title}>Dashboard</h2>
        <div className={classes.cardsGrid}>
          <CardsMetricas title="Usuarios" value={542} />
          <CardsMetricas title="Publicaciones" value={12345} />
          <CardsMetricas title="Reportes" value={15} />
        </div>
      </main>
    </BackOfficeTemplate>
  );
}