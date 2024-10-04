import { Navigate } from 'react-router-dom';
import MasterPage from '../layouts/AppLayout/AppLayout';
import { Login, Registration, Dashboard, ProjectLists, CreateNewProject } from '../pages';
import { useAppSelector } from '../hooks';

const AppRoutes = () => {
    // Higher-order function to create routes based on authentication status    
    const isUser = useAppSelector(state => state.loginState.data?.data?.isUser);
    console.log("is user from routes", isUser);
    
    const createRoute = (element: JSX.Element, requireAuth = false) => {
        if (requireAuth && (!isUser)) {
            return <Navigate to="/" />;
        }
        return element;
    };

    return [
        {
            path: '/',
            element: createRoute(<Login />, false),
        },
        {
            path: '/login',
            element: createRoute(<Login />, false),
        },
        {
            path: '/login/registration',
            element: createRoute(<Registration />, false),
        },
        {
            path: '/app',
            element: createRoute(<MasterPage />, true),
            children: [
                {
                    path: 'dashboard',
                    element: createRoute(<Dashboard />, true),
                },
                {
                    path: 'project-lists',
                    element: createRoute(<ProjectLists />, true),
                },
                {
                    path: 'create-new-project',
                    element: createRoute(<CreateNewProject />, true),
                },
            ],
        },
        {
            path: '*',
            element: <Navigate to={isUser ? "/app/dashboard" : "/login"} />,
        },
    ];
};

export default AppRoutes;
