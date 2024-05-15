import React from 'react';
import { loginStyles } from '../../containers/LoginPage/loginStyles';
import { Grid, Typography } from '@mui/material';
import loginLogo from '../../assets/images/Logo.svg'

const LoginLogo = () => {
    return (
        <Grid style={{ textAlign: 'center' }}>
            <Grid id='logo-image' sx={loginStyles.loginLogoGrid}>
                <img
                    src={loginLogo}
                    alt="Logo"
                    style={{ marginLeft: '940px' }}
                />
            </Grid>
            <Typography component="h4" sx={loginStyles.projectName}>
                Online Project Management
            </Typography>
        </Grid>
    )
}

export default LoginLogo;