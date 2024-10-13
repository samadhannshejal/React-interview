import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "../Components/Home";
import About from "../Components/About";
import User from "../Components/User";
import UserDetails from "../Components/UserDetails";
import RootLayout from "./RootLayout";
const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="user" element={<User />}>
        <Route path=":id" element={<UserDetails />} />
      </Route>
    </Route>
  )
);
const AppRoute = () => {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
};

export default AppRoute;
