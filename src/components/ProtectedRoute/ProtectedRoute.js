import React from 'react';
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ loggedIn, Component, ...props }) => {
  const location = useLocation();

  return (
    loggedIn ? <Component { ...props } /> : <Navigate to="/" replace state={{from: location}}/>
  )
};

export default ProtectedRoute;