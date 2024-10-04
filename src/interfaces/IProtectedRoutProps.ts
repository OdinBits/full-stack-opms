export interface IProtectedRouteProps {
    element: JSX.Element;
    auth: boolean;
    role?: string; // Optional, depending on your app's requirements
    requiredRole?: string; // Optional for role-based access
}
