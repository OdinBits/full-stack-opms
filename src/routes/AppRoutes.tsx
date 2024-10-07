import { Navigate } from 'react-router-dom';
import MasterPage from '../layouts/MasterContainer';
import { Login, Registration, Dashboard, ProjectLists, CreateNewProject } from '../pages';
import { useAppSelector } from '../hooks';

const AppRoutes = () => {
    // Get the user authentication state
    const isUser = useAppSelector(state => state.loginState.data?.data?.isUser);

    // Define route objects
    return [
        {
            path: '/',
            element: <Navigate to={isUser ? "/app/dashboard" : "/login"} />, // Redirect to login or dashboard
        },
        {
            path: '/login',
            element: !isUser ? <Login /> : <Navigate to="/app/dashboard" />, // Only allow login if not authenticated
        },
        {
            path: '/login/registration',
            element: !isUser ? <Registration /> : <Navigate to="/app/dashboard" />, // Redirect to dashboard if already authenticated
        },
        {
            path: '/app',
            element: isUser ? <MasterPage /> : <Navigate to="/login" />, // MasterPage protected route
            children: [
                {
                    path: 'dashboard',
                    element: isUser ? <Dashboard /> : <Navigate to="/login" />,
                },
                {
                    path: 'project-lists',
                    element: isUser ? <ProjectLists /> : <Navigate to="/login" />,
                },
                {
                    path: 'create-new-project',
                    element: isUser ? <CreateNewProject /> : <Navigate to="/login" />,
                },
            ],
        },
        {
            path: '*',
            element: <Navigate to={isUser ? "/app/dashboard" : "/login"} />, // Catch-all route
        },
    ];
};

export default AppRoutes;
