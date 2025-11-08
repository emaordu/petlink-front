import React from "react";
import { MenuIconButton } from "./MenuIconButton";
import * as classes from "./style.module.css";

export const MenuDesplegable = ({ className }) => {
  return (
    <div className={`${classes.menuDesplegable} ${className || ""}`}>
      <MenuIconButton
        className={{
          flex: "0 0 auto",
          left: "unset",
          top: "unset",
        }}
        menuBuildingBlocksMenuDivClassName={{
          color: "var(--textprimary)",
        }}
        menuBuildingBlocksMenuDivClassNameOverride={{
          color: "var(--textprimary)",
        }}
        menuBuildingBlocksMenuLabelText="Mis publicaciones"
        menuBuildingBlocksMenuLabelText1="Cerrar sesión"
        menuBuildingBlocksMenuLabelText2="Configuracion"
        menuBuildingBlocksMenuLabelText3="Perfil"
        menuBuildingBlocksMenuLabelTextClassName={{
          color: "var(--textprimary)",
        }}
        menuBuildingBlocksMenuLabelTextClassNameOverride={{
          color: "var(--textprimary)",
        }}
        menuDensityClassName={{
          backgroundColor: "var(--accent)",
          flex: "0 0 auto",
          left: "unset",
          top: "unset",
        }}
        visible={false}
      />
    </div>
  );
};