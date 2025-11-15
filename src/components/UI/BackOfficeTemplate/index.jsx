import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as classes from "./BackOfficeTemplate.module.css";
import { BtnHome } from "@/components/UI/Buttons/BtnHome";
import { BtnPropuestas } from "@/components/UI/Buttons/BtnPropuestas";
import { BtnOfertas } from "@/components/UI/Buttons/BtnOfertas";

export const BackOfficeTemplate = ({
  children,
  onSelectSection,
  onDashboardClick,
  onUsuariosClick,
  onReportesClick,
  onModeradoresClick,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const go = (section) => {
    const handled = onSelectSection?.(section)
      || (section === "dashboard" && onDashboardClick?.())
      || (section === "usuarios" && onUsuariosClick?.())
      || (section === "reportes" && onReportesClick?.())
      || (section === "moderadores" && onModeradoresClick?.());
    if (!handled) navigate(`/back-office/${section}`);
  };

  const pathname = location.pathname || "";
  const isDashboard = pathname.includes("/back-office/dashboard");
  const isUsuarios = pathname.includes("/back-office/usuarios");
  const isReportes = pathname.includes("/back-office/reportes");
  const isModeradores = pathname.includes("/back-office/moderadores");

  return (
    <div className={classes.bgTemplateBack}>
      <header className={classes.header}>
        <div className={classes.leftGroup}>
          <BtnHome onClick={() => navigate("/inicio")} />
        </div>
        <div className={classes.centerGroup}>
          <BtnPropuestas text="Dashboard" active={isDashboard} onClick={() => go("dashboard")} />
          <BtnPropuestas text="Usuarios" active={isUsuarios} onClick={() => go("usuarios")} />
          <BtnOfertas text="Reportes" active={isReportes} onClick={() => go("reportes")} />
          <BtnOfertas text="Moderadores" active={isModeradores} onClick={() => go("moderadores")} />
        </div>
        <div className={classes.rightGroup} />
      </header>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default BackOfficeTemplate;