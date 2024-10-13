import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import '../Style/route.css'
const RootLayout = () => {
  return (
    <div className="app-container">
    <nav className="navigation-nav">
      <div className="nav-title">Nested Navigation</div>
      <div className="nav-links">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"about"}>About</NavLink>
        <NavLink to={"user"}>User</NavLink>
      </div>
    </nav>
      <div className="outlet">
      <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
