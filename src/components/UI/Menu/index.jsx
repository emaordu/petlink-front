import React from "react";
import * as classes from "./Menu.module.css";

// Menú desplegable simple y accesible. Se posiciona bajo el avatar.
// Usa role="menu" y permite manejar foco/escape.
export const MenuDesplegable = ({
  isOpen,
  onClose,
  items = [],
  className,
}) => {
  if (!isOpen) return null;

  return (
    <div className={`${classes.menu} ${className || ""}`} role="menu" aria-label="Menú de perfil">
      {items.map((item, idx) => (
        <button
          key={idx}
          className={classes.menuItem}
          role="menuitem"
          onClick={() => {
            item.onClick?.();
            onClose?.();
          }}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};