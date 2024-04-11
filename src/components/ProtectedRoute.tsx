import React from 'react';
import {Navigate, Route } from "react-router-dom";

interface ProtectedRouteProps{
    component: React.ComponentType<any>;
    isAuthenticated: boolean;
    path?: string;
    exact?: boolean;
    sensitive?: boolean;
    strict?: boolean;
}

const ProtectedRoute : React.FC<ProtectedRouteProps> = ({ component: Component, isAuthenticated, ...rest }) => {
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return <Route {...rest} action={(props) => <Component {...props} />} />;
};

export default ProtectedRoute;