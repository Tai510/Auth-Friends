// import axios from 'axios';

// export const axiosWithAuth = () => {
//   const token = localStorage.getItem('token');
//   return axios.create({
//     headers: {
//       Authorization: token
//     }
//   });
// };


import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem("token")) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;

