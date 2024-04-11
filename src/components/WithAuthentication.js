import React from 'react';
import { Navigate } from 'react-router-dom';

const WithAuthentication = ({ Component, ...props }) => {
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
       return <Navigate to="/login" />;
    }
    return <Component {...props} />;
   };

export default WithAuthentication;