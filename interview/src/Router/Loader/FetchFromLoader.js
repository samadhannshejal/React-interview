import React from "react";
import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";

const FetchFromLoader = () => {
  const data = useLoaderData();
  return (
    <div>

      {data.map((item) => (
          <li key={item.id}>
          <NavLink to={item.id.toString()}>{item.title}</NavLink>
        </li>
      ))}
      <Outlet/>
    </div>
  );
};

export default FetchFromLoader;
