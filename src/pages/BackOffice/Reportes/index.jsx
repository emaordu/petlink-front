import React, { useEffect, useState } from "react";
import BackOfficeTemplate from "@/components/UI/BackOfficeTemplate";
import * as classes from "./Reportes.module.css";
import FilaReporte from "@/components/UI/BackOfficeComponents/FilaReporte";
import FilaReporteRow from "@/components/UI/BackOfficeComponents/FilaReporte/FilaReporteRow";
import { BtnSecondary, BtnDanger } from "@/components/UI/Buttons";

export default function BackOfficeReportes() {
  const [reports, setReports] = useState([]);
  const [query, setQuery] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("appReports");
      const initial = raw ? JSON.parse(raw) : [
        { id: "R-1001", postId: "post-1", postTitle: "Cuidado de perro", reporterEmail: "user1@mail.com", reason: "Contenido inapropiado" },
        { id: "R-1002", postId: "post-2", postTitle: "Paseador de perros", reporterEmail: "user2@mail.com", reason: "Spam" },
        { id: "R-1003", postId: "post-3", postTitle: "Adiestramiento canino", reporterEmail: "user3@mail.com", reason: "Lenguaje ofensivo" },
      ];
      setReports(initial);
    } catch {}
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "appReports") {
        try {
          const next = e.newValue ? JSON.parse(e.newValue) : [];
          setReports(next);
        } catch {}
      }
    };
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, []);

  const normalized = query.trim().toLowerCase();
  const filtered = normalized
    ? [...reports]
        .filter((r) => r.id.toLowerCase().includes(normalized))
        .sort((a, b) => {
          const ia = a.id.toLowerCase();
          const ib = b.id.toLowerCase();
          const score = (x) => (x === normalized ? 3 : x.startsWith(normalized) ? 2 : 1);
          return score(ib) - score(ia);
        })
    : reports;

  const onResolve = (report) => {
    setSelected(report);
    setModalOpen(true);
  };
  const onDiscard = (report) => {
    try {
      const next = reports.filter((r) => r.id !== report.id);
      setReports(next);
      localStorage.setItem("appReports", JSON.stringify(next));
    } catch {}
  };
  const confirmResolve = () => {
    if (!selected) return;
    try {
      const hiddenRaw = localStorage.getItem("hiddenPosts");
      const hidden = hiddenRaw ? JSON.parse(hiddenRaw) : [];
      const nextHidden = Array.from(new Set([...hidden, selected.postId]));
      localStorage.setItem("hiddenPosts", JSON.stringify(nextHidden));
      const nextReports = reports.filter((r) => r.id !== selected.id);
      setReports(nextReports);
      localStorage.setItem("appReports", JSON.stringify(nextReports));
      setModalOpen(false);
      setSelected(null);
    } catch {
      setModalOpen(false);
      setSelected(null);
    }
  };

  return (
    <BackOfficeTemplate>
      <main className={classes.page}>
        <div className={classes.searchRow}>
          <input
            className={classes.searchInput}
            type="search"
            placeholder="Buscar por ID de reporte..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Buscar reporte por ID"
          />
        </div>
        <h2 className={classes.title}>Reportes</h2>
        <div className={classes.table}>
          <FilaReporte />
          <div className={classes.rows}>
            {filtered.map((r) => (
              <FilaReporteRow key={r.id} report={r} onResolve={onResolve} onDiscard={onDiscard} />
            ))}
          </div>
        </div>
        {modalOpen && selected && (
          <div className={classes.modalOverlay} onClick={() => setModalOpen(false)}>
            <div className={classes.modal} onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
              <h3 className={classes.modalTitle}>Confirmar resolución</h3>
              <div className={classes.modalBody}>
                <div className={classes.modalRow}><span className={classes.modalLabel}>ID:</span> {selected.id}</div>
                <div className={classes.modalRow}><span className={classes.modalLabel}>Post:</span> {selected.postTitle}</div>
                <div className={classes.modalRow}><span className={classes.modalLabel}>Reportado por:</span> {selected.reporterEmail}</div>
                <div className={classes.modalRow}><span className={classes.modalLabel}>Motivo:</span> {selected.reason}</div>
              </div>
              <div className={classes.modalActions}>
                <BtnSecondary text="Cancelar" size="sm" onClick={() => setModalOpen(false)} />
                <BtnDanger text="Resolver y ocultar post" size="sm" onClick={confirmResolve} />
              </div>
            </div>
          </div>
        )}
      </main>
    </BackOfficeTemplate>
  );
}