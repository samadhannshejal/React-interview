import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AuthLayout from "./AuthLayout";
import withRoleProtection from "./HOC/withRoleProtection";
import DashBoard from "./Components/Admin/DashBoard";
import Setting from "./Components/Admin/Setting";
import UserManagment from "./Components/Admin/UserManagment";
import Order from "./Components/User/Order";
import Profile from "./Components/User/Profile";
import NonAuth from "./Non-Auth";
const ProtectedDashboard = withRoleProtection(DashBoard, ["admin"]);
const ProtectedSetting = withRoleProtection(Setting, ["admin"]);
const ProtectedUserManagement = withRoleProtection(UserManagment, ["admin"]);
const ProtectedOrder = withRoleProtection(Order, ["user"]);
const ProtectedProfile = withRoleProtection(Profile, ["user"]);
const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AuthLayout />}>
        <Route path="admin">
          <Route path="dashboard" element={<ProtectedDashboard />} />
          <Route path="settings" element={<ProtectedSetting />} />
          <Route path="user-management" element={<ProtectedUserManagement />} />
        </Route>
        <Route path="user">
          <Route path="orders" element={<ProtectedOrder />} />
          <Route path="profile" element={<ProtectedProfile />} />
        </Route>
        <Route path="non-authorized" element={<NonAuth />} />
      </Route>
    )
  );
  

const AuthRoot = () => {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
};

export default AuthRoot;
