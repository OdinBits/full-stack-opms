// BackButton.js
import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../hooks';
import { setNavLink, popHistory } from '../redux/slices/NavSlice';
import { navLinks } from '../interfaces/INavLinks';

const BackButton = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { history } = useAppSelector(state => state.navLinkStates);

    const handleGoBack = () => {
        if (history.length > 1) {
            const previousRoute = history[history.length - 2];
            navigate(previousRoute);
            const activeLinkIndex = navLinks.findIndex(link => link.path === previousRoute);
            if (activeLinkIndex !== -1) {
                dispatch(setNavLink(activeLinkIndex));
            }
        } else {
            navigate('/');
        }
        dispatch(popHistory());
    };

    return (
        <Button variant="contained" color="primary" onClick={handleGoBack}>
            Go Back
        </Button>
    );
};

export default BackButton;
