import React from "react";
// 1. Asegúrate de que importe el CSS correcto
import * as classes from "./BtnHome.module.css"; 
// 2. Importa tu ícono (ajusta la ruta si es necesario)
import homeIcon from "@/assets/images/icons/home.png"; 

export const BtnHome = ({ className, onClick }) => {
  
  // 3. Eliminamos useReducer, onMouseEnter, onMouseLeave

  return (
    // 4. Convertimos de <div> a <button>
    <button
      className={`${classes.btnHome} ${className || ""}`}
      onClick={onClick}
    >
      {/* 5. Renderizamos el ícono como <img>, no como fondo */}
      <img 
        src={homeIcon} 
        alt="Home" 
        className={classes.icon} 
      />
    </button>
  );
};