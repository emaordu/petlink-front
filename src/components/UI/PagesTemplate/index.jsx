import React from "react";
import * as classes from "./PagesTemplate.module.css";
import { NavBar } from "@/components/UI/NavBar";
import BtnNewPost from "@/components/UI/Buttons/BtnNewPost";

// Plantilla de página: incluye NavBar al tope y botón flotante de nuevo post.
// Renderiza el contenido de la página vía children, manteniendo enfoque mobile-first.
export const PagesTemplate = ({ children, userImageUrl, onProfileClick, onNewPostClick }) => {
  return (
    <div className={classes.bgTemplate}>
      <NavBar userImageUrl={userImageUrl} onProfileClick={onProfileClick} />

      <div className={classes.content}>{children}</div>

      <div className={classes.fab}>
        <BtnNewPost onClick={onNewPostClick} />
      </div>
    </div>
  );
};

export default PagesTemplate;