import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import './Router.css'

const NestedRoot = () => {
  return (
    <>
    <div className="nested-route">
      <NavLink to={"child1"}>Child1</NavLink>
      <NavLink to={"child2"}>Child2</NavLink>

    </div>
    <Outlet/>
    </>

  );
};

export default NestedRoot;
