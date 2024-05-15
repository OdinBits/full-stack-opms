import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { NavLink } from 'react-router-dom';
import { setNavLink } from '../../store/navigationPersistanceSlice';
import { navLinks } from '../../interfaces/NavLinks';
import { Box, Grid, List, ListItem } from '@mui/material';
import { contentStyles } from './contentsStyle';

interface NavigationLinksProps {
    setPageInfo: React.Dispatch<React.SetStateAction<string>>;
}

const NavigationLinks: React.FC<NavigationLinksProps> = ({ setPageInfo }) => {
    const dispatch = useAppDispatch();
    const { isActive } = useAppSelector((state: { navLinkStates: any; }) => state.navLinkStates);

    const handleNavLinkClick = (index: number) => {
        dispatch(setNavLink(index));
        setPageInfo(navLinks[index].label);
    };

    const renderNavLinks = navLinks.map((link, index) => (
        <Box key={index} style={contentStyles.indicatorBox}>
            {isActive === index && (
                <Grid sx={contentStyles.Indicator}>
                    <Grid
                        style={contentStyles.innerIndicator} />
                </Grid>
            )}
            <List key={link.path} >
                <ListItem disablePadding>
                    <NavLink
                        className={`nav-link ${isActive === index ? 'active' : ''}`}
                        onClick={() => handleNavLinkClick(index)}
                        to={link.path}
                    >
                        <img className='navtag' src={isActive === index ? link.activeImage : link.image} alt='' />
                    </NavLink>
                </ListItem>
            </List>
        </Box>
    ));

    return <>{renderNavLinks}</>;
}

export default NavigationLinks;
