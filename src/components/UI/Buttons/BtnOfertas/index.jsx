import React from "react";
import * as classes from "./BtnOfertas.module.css";
import PropTypes from "prop-types";

// 1. Props simplificados (igual que BtnPrimary)
export const BtnOfertas = ({ className, divClassName, text, onClick, active = false }) => {
  
  // 2. Eliminamos useReducer, onMouseEnter, onMouseLeave

  return (
    // 3. Convertimos de <div> a <button>
    <button
      className={`${classes.btnOfertas} ${active ? classes.active : ""} ${className || ""}`}
      onClick={onClick}
    >
      <div
        // 4. Usamos divClassName para el texto
        className={`${classes.label} ${divClassName || ""}`}
      >
        {/* 5. Usamos un prop para el texto */}
        {text}
      </div>
    </button>
  );
};

BtnOfertas.propTypes = {
  className: PropTypes.string,
  divClassName: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  active: PropTypes.bool,
};

// Valor por defecto
BtnOfertas.defaultProps = {
  text: "Ofertas",
};