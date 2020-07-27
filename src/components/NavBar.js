import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-info">
      <div className="navbar-brand">Todo App</div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/" exact>
            Главная страница
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">
            Баннер
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
