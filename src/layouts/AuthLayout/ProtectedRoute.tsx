import React from 'react';
import { Navigate } from 'react-router-dom';
import { IProtectedRouteProps } from '../../interfaces/IProtectedRoutProps';

const ProtectedRoute: React.FC<IProtectedRouteProps> = ({ element, auth, role, requiredRole }) => {
    // If user is not authenticated, redirect to login
    if (!auth) {
        return <Navigate to="/login" />;
    }

    // If a role is required and the user's role does not match, redirect to unauthorized page
    if (requiredRole && role !== requiredRole) {
        return <Navigate to="/unauthorized" />;
    }

    // Render the element if checks pass
    return element;
};

export default ProtectedRoute;
