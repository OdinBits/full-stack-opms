import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks';
import { navLinks } from '../interfaces/INavLinks';
import { setNavLink } from '../redux/slices/NavSlice';
import { setPageName } from '../redux/slices/PageNameSlice';
import '../styles/SidebarStyle.css';

const Sidebar = () => {
    const dispatch = useAppDispatch();
    const { isActive } = useAppSelector(state => state.navLinkStates);

    const handleNavLinkClick = (index: number) => {
        dispatch(setNavLink(index));
        dispatch(setPageName(navLinks[index].label)); // Dispatch setPageName action
    };

    return (
        <div className="block-container">
            {navLinks.map((link, index) => (
                <div key={index} className={`nav-item ${isActive === index ? 'active' : ''}`}>
                    {isActive === index && <div className="Indicator" />}
                    <NavLink
                        className={`nav-link ${isActive === index ? 'active' : ''}`}
                        onClick={() => handleNavLinkClick(index)}
                        to={link.path}
                    >
                        <img
                            className="navtag"
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
