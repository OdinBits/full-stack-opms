// HeaderBlock.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../hooks';
import { navLinks } from '../interfaces/INavLinks';
import { updateHistory } from '../redux/slices/NavSlice';
import { BackButton } from '../components';


const HeaderBlock = () => {
    const [pageInfo, setPageInfo] = React.useState('');
    const navigate = useNavigate();
    const { isActive } = useAppSelector(state => state.navLinkStates);
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        const activeLink = navLinks[isActive];
        const path = activeLink ? activeLink.path : '/';
        const label = activeLink ? activeLink.label : 'Dashboard';

        navigate(path);
        setPageInfo(label);
        dispatch(updateHistory(path));
    }, [navigate, isActive, dispatch]);

    return (
        <div>
            <h1>{pageInfo}</h1>
            <BackButton /> {/* Use the BackButton component */}
        </div>
    );
};

export default HeaderBlock;
