import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { navLinks } from '../../../interfaces/iNavLinks';
import { popHistory, setNavLink, updateHistory } from '../../../store/Navigation/NavSlice';

const HeaderBlock = () => {
    const [pageInfo, setPageInfo] = React.useState('');

    const navigate = useNavigate();
    const { isActive, history } = useAppSelector(state => state.navLinkStates);
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        const activeLink = navLinks[isActive];
        const path = activeLink ? activeLink.path : '/';
        const lable = activeLink ? activeLink.label : 'Dashboard';

        navigate(path);
        setPageInfo(lable);
        dispatch(updateHistory(path));
    },[navigate, isActive, dispatch])

    const goBack = () => {
        if (history.length > 1)  {
            const previousRoute = history[history.length - 2];
            navigate(previousRoute);
            const activeLinkIndex = navLinks.findIndex(link => link.path === previousRoute)
            if (activeLinkIndex !== -1) {
                setPageInfo(navLinks[activeLinkIndex].label);
                dispatch(setNavLink(activeLinkIndex));
            }
        }
        else {
            navigate('/');
        }
        dispatch(popHistory());
    };

    

    return (
        <div>

        </div>
    )
}

export default HeaderBlock
