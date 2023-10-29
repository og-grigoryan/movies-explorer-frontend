// import React from 'react';
// import { Navigate, useLocation } from "react-router-dom";

// const ProtectedRoute = ({ loggedIn, Component, ...props }) => {
//   const location = useLocation();

//   return (
//     loggedIn ? <Component { ...props } /> : <Navigate to="/" replace state={{from: location}}/>
//   )
// };

// export default ProtectedRoute;

import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ Component, ...props }) {
  const isLoggedIn = localStorage.getItem('jwt') !== null;
  return <>{isLoggedIn ? <Component {...props} /> : <Navigate to="/" replace />}</>;
}

export default ProtectedRoute;
