import React from 'react';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import logoutImage from '../../assets/images/Logout/Logout.svg';
import { contentStyles } from './contentsStyle';

interface handleLogOut {
    handleLogout?: () => void;
}

const LogOutComponent: React.FC<handleLogOut> = ({ handleLogout }) => {
    return (
        <Grid
            id='logOut'
            sx={contentStyles.logOutContainer}
        >
            <Box onClick={handleLogout} aria-label="Log out">
                <img className='navtag' src={logoutImage} alt="Log out" style={{width:'100%'}}/>
            </Box>
        </Grid>
    )
}
export default LogOutComponent;