import React from "react";
import { useNavigate } from "react-router-dom";
import * as classes from "./NavBar.module.css";

import { BtnOfertas } from "../Buttons/BtnOfertas";
import { BtnPropuestas } from "../Buttons/BtnPropuestas";
import { BtnHome } from "../Buttons/BtnHome";

import defaultAvatar from "@/assets/images/icons/Profile.png";

export const NavBar = ({ userImageUrl, onProfileClick }) => {
  const navigate = useNavigate();

  return (
    // 4. El div .navbar ahora es el contenedor Flex
    <div className={classes.navbar}>
      {/* 5. Grupo Izquierdo: Links de Navegación */}
      <div className={classes.navLinks}>
        <BtnHome onClick={() => navigate("/inicio")} />

        <BtnOfertas
          className={classes.btnOfertas}
          text="Ofertas" // <-- PROP CORREGIDO
          onClick={() => navigate("/ofertas")} // Asumiendo una ruta
        />

        <BtnPropuestas
          className={classes.btnPropuestas}
          text="Propuestas" // <-- PROP CORREGIDO
          onClick={() => navigate("/propuestas")} // Asumiendo una ruta
        />
      </div>

      {/* 6. Grupo Derecho: Controles de Usuario */}
      <div className={classes.userControls}>
        <div className={classes.misChats} onClick={() => navigate("/chats")}>
          Mis Chats
        </div>

        <button className={classes.profileButton} onClick={onProfileClick}>
          <img
            className={classes.userImage}
            alt="Imagen de perfil"
            src={userImageUrl || defaultAvatar}
          />
        </button>
      </div>
    </div>
  );
};
