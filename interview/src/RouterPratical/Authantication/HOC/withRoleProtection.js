import React from "react";
import { Navigate, useOutletContext } from "react-router-dom";

const withRoleProtection = (WrappedComponent, allowedRoles) => {
    
    return (props) => {
      const {userRole}=useOutletContext();
    if (!allowedRoles.includes(userRole)) {
      return   <Navigate to={'/non-authorized'}/>
    }

    return <WrappedComponent {...props} />;
  };
};

export default withRoleProtection;
