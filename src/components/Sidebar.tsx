import { NavLink, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks';
import { navLinks } from '../interfaces/INavLinks';
import { setNavLink, updateHistory } from '../redux/slices/navSlice';
import styles from '../styles/sidebar.module.css';
import { useEffect } from 'react';

const Sidebar = () => {
    const dispatch = useAppDispatch();
    const location = useLocation();
    const { isActive, history } = useAppSelector(state => state.navLinks);

    // Sync the active link based on the current route
    useEffect(() => {
        const currentPath = location.pathname.replace('/app/', '');
        const activeIndex = navLinks.findIndex(link => link.path === currentPath);

        if (activeIndex !== -1 && activeIndex !== isActive) {
            dispatch(setNavLink(activeIndex));
        }
    }, [location.pathname, isActive, dispatch]);

    const handleNavLinkClick = (index: number) => {
        const currentPath = location.pathname.replace('/app/', '');

        // Before navigating, update the history with the current path
        if (history[history.length - 1] !== currentPath) {
            dispatch(updateHistory(currentPath)); // Save current path before navigating
        }

        dispatch(setNavLink(index)); // Update active link
    };

    return (
        <div id='Sidebar' className={styles.sidebar}>
            {navLinks.map((link, index) => (
                <div key={index} className={`nav-item ${isActive === index ? 'active' : ''}`}>
                    {isActive === index && <div className="Indicator" />}
                    <NavLink
                        className={`nav-link ${isActive === index ? 'active' : ''}`}
                        onClick={() => handleNavLinkClick(index)}
                        to={link.path}
                    >
                        <img
                            className="navtag mx-auto w-6"
                            src={isActive === index ? link.activeImage : link.image}
                            alt={link.label}
                        />
                    </NavLink>
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
