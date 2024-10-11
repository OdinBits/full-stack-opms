import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../hooks';
import { setNavLink, popHistory } from '../redux/slices/navSlice';
import { navLinks } from '../interfaces/INavLinks';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const BackButton = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { history, isActive } = useAppSelector(state => state.navLinks);

    const handleGoBack = () => {
        if (history.length > 1) {
            // Get the last route in history (most recent route before the current one)
            const lastRoute = history[history.length - 1];
            
            // Navigate to the last route
            navigate(lastRoute);

            // Find the index of the last route in navLinks
            const activeLinkIndex = navLinks.findIndex(link => link.path === lastRoute);

            // Set the new active link if the route exists in navLinks
            if (activeLinkIndex !== -1) {
                dispatch(setNavLink(activeLinkIndex));
            }

            // Pop the last route from history after navigating
            dispatch(popHistory());
        } else {
            // Default action if no more history (navigate to homepage or first route)
            navigate('/app/dashboard');
        }
    };

    // Disable the back button if on the first page (Dashboard)
    const isDisabled = history.length <= 1 || isActive === 0;

    return (
        <ArrowBackIosNewIcon
            sx={{
                color: isDisabled ? '#a0a0a0' : '#e0e0e0', // Grayed out if disabled
                fontSize: '30px',
                marginRight: '2px',
                cursor: isDisabled ? 'not-allowed' : 'pointer', // Disable pointer events if disabled
            }}
            onClick={isDisabled ? undefined : handleGoBack} // Disable onClick if on Dashboard
        />
    );
};

export default BackButton;
