import { Navigate } from 'react-router-dom';
import MasterPage from '../layouts/MasterContainer';
import { Login, Registration, Dashboard, ProjectLists, CreateNewProject } from '../pages';
import { useAppSelector } from '../hooks';

const AppRoutes = () => {
    const isUser = useAppSelector(state => state.loginState.data?.data?.isUser);

    return [
        {
            path: '/',
            element: <Navigate to={isUser ? "/app/dashboard" : "/login"} />,
        },
        {
            path: '/login',
            element: !isUser ? <Login /> : <Navigate to="/app/dashboard" />,
        },
        {
            path: '/login/registration',
            element: !isUser ? <Registration /> : <Navigate to="/app/dashboard" />,
        },
        {
            path: '/app',
            element: isUser ? <MasterPage /> : <Navigate to="/login" />,
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
            element: <Navigate to={isUser ? "/app/dashboard" : "/login"} />,
        },
    ];
};

export default AppRoutes;
