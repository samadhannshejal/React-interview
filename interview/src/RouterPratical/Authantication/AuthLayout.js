import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const AuthLayout = () => {
    const userRole='user'
  return (
    <div>
      <div>
        <nav className="navigation-nav">
          <div className="nav-title">Welcome to Auth</div>
          <div className="nav-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/admin/dashboard">Dashboard</NavLink>
            <NavLink to="/admin/user-management">User Management</NavLink>
            <NavLink to="/admin/settings">Settings</NavLink>
            <NavLink to="/user/profile">Profile</NavLink>
            <NavLink to="/user/orders">Orders</NavLink>
          </div>
        </nav>
        <div className="outlet">
          <Outlet context={{userRole}}/>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
