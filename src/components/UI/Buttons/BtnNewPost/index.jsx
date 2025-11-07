import PropTypes from "prop-types";
import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import * as classes from "./BtnNewPost.module.css";

export const BtnNewPost = ({ estado = "predeterminado", className }) => {
  const [state, dispatch] = useReducer(reducer, { estado });
  const navigate = useNavigate(); // 

  const handleClick = () => {
    dispatch("mouse_click"); 
    setTimeout(() => {
      navigate("/crear-post"); // 
    }, 150); 
  };

  return (
    <div
      className={`${classes.container} ${classes[state.estado]} ${className || ""}`}
      onMouseEnter={() => dispatch("mouse_enter")}
      onMouseLeave={() => dispatch("mouse_leave")}
      onClick={handleClick}
      style={{ cursor: "pointer" }} 
    >
      <div className={`${classes.icon} ${classes[`icon-${state.estado}`]}`}>
        +
      </div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return { ...state, estado: "hover" };
    case "mouse_leave":
      return { ...state, estado: "predeterminado" };
    case "mouse_click":
      return { ...state, estado: "on-click" };
    default:
      return state;
  }
}

BtnNewPost.propTypes = {
  estado: PropTypes.oneOf(["on-click", "predeterminado", "hover"]),
};