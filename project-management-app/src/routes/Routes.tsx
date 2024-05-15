import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store';
import Cookies from 'js-cookie';
import { setAuthStatus } from '../store/authSlice';
import Login from '../containers/LoginPage';
import Contents from '../containers/Contents';
import { routeConfig } from '../interfaces/RoutLists';
import NotFound from '../components/FeedBacks/CustomErrorPage';


const AllRoutes: React.FC = () => {
    const dispatch = useAppDispatch();
    React.useEffect(() => {
        const cookie = Cookies.get('token');
        if (!cookie) {
            dispatch(
                setAuthStatus({
                    isValid: false,
                    message: '',
                    color: '',
                    loading: false,
                    email:'Invalid user',
                    name:'No user'
                })
            );
        }
    }, [dispatch]);

    const { isValid } = useAppSelector((state) => state.auth);

    return (
        <Routes>
            <Route path="*" element={isValid ? <Contents /> : <Login />} >
                {routeConfig.map(({ path, element: Component }) => (
                    <Route key={path} path={path} element={<Component />} />
                ))}
            </Route>
            <Route path="*" element={<NotFound errorMessage="Page not found" />}/>
        </Routes>
    );
};
export default AllRoutes;
