import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import logoutImage from '../../assets/images/Logout/Logout.svg';
import Grid from '@mui/material/Grid';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box, Stack, ThemeProvider, Typography } from '@mui/material';
import Cookies from 'js-cookie';
import { useAppDispatch, useAppSelector } from '../../store';
import { popHistory, setNavLink, updateHistory } from '../../store/navigationPersistanceSlice';
import { setAuthStatus } from '../../store/authSlice';
import { navLinks } from '../../interfaces/NavLinks';
import NavigationLinks from './NavLinks';
import LogOutComponent from './LogOut';
import { globalTheme } from '../../themes/globalTheme';
import { contentStyles } from './contentsStyle';
import { routeConfig } from '../../interfaces/RoutLists';
import backgroundImage from '../../assets/images/Header/Header-bg.svg';
import loginLogo from '../../assets/images/Logo.svg';

const Contents: React.FC = () => {
    const [pageInfo, setPageInfo] = React.useState('');
    const navigate = useNavigate();
    const { isActive, history } = useAppSelector(state => state.navLinkStates);
    const dispatch = useAppDispatch();
    const { email, name } = useAppSelector((state) => state.auth);

    React.useEffect(() => {
        const activeLink = navLinks[isActive];
        const path = activeLink ? activeLink.path : '/';
        const label = activeLink ? activeLink.label : 'Dashboard';

        navigate(path);
        setPageInfo(label);
        dispatch(updateHistory(path));
    }, [navigate, isActive, dispatch]);

    const goBack = () => {
        if (history.length > 1) {
            const previousRoute = history[history.length - 2];
            navigate(previousRoute);
            const activeLinkIndex = navLinks.findIndex(link => link.path === previousRoute);
            if (activeLinkIndex !== -1) {
                setPageInfo(navLinks[activeLinkIndex].label);
                dispatch(setNavLink(activeLinkIndex));
            }
        } else {
            navigate('/');
        }
        dispatch(popHistory());
    };

    const handleLogout = () => {
        dispatch(setAuthStatus({
            isValid: false,
            message: '',
            color: '',
            loading: false,
            email: 'In valid User',
            name: 'no name'
        }));
        Cookies.remove('token')
        navigate('/')
    };

    //

    return (
        <ThemeProvider theme={globalTheme}>
            <Box bgcolor='#F3F5F7'>
                <Stack direction="row" zIndex='1000' spacing={{ xl: 7.5, lg: 7.5, md: 7.5, sm: 'none', xs: 'none' }} justifyContent='space-between' height='100%' sx={{ position: 'relative', overflowX: 'hidden', overflowY: 'auto' }}>

                    <Box sx={contentStyles.routesDefault} flex={2}>
                        <Grid
                            sx={contentStyles.bgImage} >
                            <img src={backgroundImage} alt="Background" style={{ width: '100%' }} />
                        </Grid>

                        <Grid >
                            <Box display='flex' sx={contentStyles.header} flex={3}>
                                <Box sx={contentStyles.pageNameStyle} flex={1}>
                                    {history.length > 1 && (<ArrowBackIosIcon onClick={goBack} sx={contentStyles.ArrowBack} />)}
                                    <Typography sx={{ fontSize: { xl: '23px', lg: '23px', md: '23px', sm: '20px', xs: '20px' }, color: 'white' }}>{pageInfo}</Typography>
                                </Box>
                                <Grid sx={contentStyles.LogOutGrid}>
                                    <Grid
                                        id='logOut'
                                        sx={contentStyles.LogOutStyle}
                                    >
                                        <Box onClick={handleLogout} >
                                            <img className='navtag' src={logoutImage} alt="Logout" style={{ width: '20px' }} />
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Box sx={contentStyles.routesImageContainer} flex={5}>
                                    <img src={loginLogo} alt='logoImage' style={{ width: 'auto', height: 'auto', transform: 'translate( 35%, 0%)' }} />
                                </Box>
                                <Box sx={{ height: { xl: '100%', lg: '100%', md: '100%', sm: '25vh', xs: '25vh' }, width: { xl: '10%', lg: '10%', md: '10%', sm: '40%', xs: '40%' }, display: { xl: 'flex', lg: 'flex', md: 'flex', sm: 'none', xs: 'none' }, justifyContent: 'right', alignItems: 'center', marginBottom: { xs: '30px' } }}>
                                    <Typography sx={{
                                        fontSize: '20px', background: 'white', height: '5vh', borderRadius: '10px', marginRight: '20px', padding: '2px', fontWeight: 'bold', fontFamily: 'Nunito Sans', display: 'flex',
                                        alignItems: 'center',
                                    }}>{name}</Typography>
                                </Box>
                            </Box>
                            
                        </Grid>

                    </Box>

                    <Grid item sx={contentStyles.mobileVersionNavLinks}>
                        <NavigationLinks setPageInfo={setPageInfo} />
                    </Grid>
                </Stack>
            </Box>
            {/* <Box bgcolor='#F3F5F7'>
            <Stack direction="row" zIndex='1000' spacing={2} justifyContent='space-between' height='100%' sx={{ position: 'relative', overflowX: 'hidden', overflowY: 'auto' }}>
                <Box sx={contentStyles.innerGridWrap} flex={1}>
                    <NavigationLinks setPageInfo={setPageInfo} />
                    <Grid container sx={contentStyles.defaultViewLogout}>
                        <LogOutComponent handleLogout={handleLogout} />
                    </Grid>
                </Box>

                <Box sx={contentStyles.routesDefault} flex={1}>
                    <Grid
                        sx={contentStyles.bgImage} >
                        <img src={backgroundImage} alt="Background" style={{ width: '100%' }} />
                    </Grid>

                    <Grid >
                        <Box display='flex' sx={contentStyles.header} >
                            <Box sx={contentStyles.pageNameStyle} flex={1}>
                                {history.length > 1 && (<ArrowBackIosIcon onClick={goBack} sx={contentStyles.ArrowBack} />)} 
                                <Typography sx={{fontSize:{xl:'20px',lg:'20px',md:'20px',sm:'20px',xs:'20px'},color:'#FFFFFF',fontWeight:'bold'}}>{pageInfo}</Typography>
                            </Box>
                            <Grid sx={contentStyles.LogOutGrid}>
                                <Grid
                                    id='logOut'
                                    sx={contentStyles.LogOutStyle}
                                >
                                    <Box onClick={handleLogout} >
                                        <img className='navtag' src={logoutImage} alt="Logout" style={{ width: '20px' }} />
                                    </Box>
                                </Grid>
                            </Grid>
                            <Box sx={contentStyles.routesImageContainer} flex={5}>
                                    <img src={loginLogo} alt='logoImage' style={{ width: 'auto', height: 'auto', transform: 'translate( 35%, 0%)'}} />
                            </Box>
                        </Box>
                        <Grid sx={contentStyles.routesContainer} >
                            <Box style={{ width: '95%' }} >
                                <Routes>
                                    {routeConfig.map(({ path, element: Component }) => (
                                        <Route key={path} path={path} element={<Component />} />
                                    ))}
                                </Routes>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>


                <Grid item sx={contentStyles.mobileVersionNavLinks}>
                    <NavigationLinks setPageInfo={setPageInfo} />
                </Grid>
            </Stack>
        </Box> */}
        </ThemeProvider>

    );
}
export default Contents;
