import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import "./Router.css";

const RouterRoot = () => {
  return (
    <>
      <nav className="nav">
        <h1>Learning Routing...</h1>
        <div className="nav-links">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"about"}> About</NavLink>
          <NavLink to={"nested"}> Nested Route</NavLink>
          <NavLink to="fetchData">Fetch Data From Loader</NavLink>
        </div>
      </nav>

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes> */}

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RouterRoot;
