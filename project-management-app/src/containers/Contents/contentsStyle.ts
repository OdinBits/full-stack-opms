import { createTheme } from '@mui/material';

export const contentsTheme = createTheme({
    typography: {
        fontFamily: "Nunito Sans",
    }
})

export const contentStyles = {

    // stackProps: {
    //     direction: "row",
    //     zIndex: '1000',
    //     spacing: { xl: 7.5, lg: 7.5, md: 7.5, sm: 'none', xs: 'none' },
    //     justifyContent: 'space-between',
    //     height: '100%',
    //     position: 'relative',
    //     overflowX: 'hidden',
    //     overflowY: 'auto'
    // },
    indicatorBox: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        padding: '20px'
    },
    innerIndicator: {
        width: '10px',
        height: '40px',
        backgroundColor: 'blue',
        borderRadius: '0 52px 52px 0',
    },
    header: {
        width: '100%',
        height: '10vh',
        marginBottom: {md:'30px'},
        marginTop: { xl: '20px', lg: '20px', md: 'none', xs: 'none', sm: 'none' },
        justifyContent:'space-between'
    },
    bgImage: {
        position: 'absolute',
        width: '100vw',
        height: '25vh',
        backgroundRepeat: 'no-repeat',
        zIndex: '-11',
        overflowX: 'hidden',
    },
    stackStyles: {
        direction: 'row',
        spacing: { xl: 7.5, lg: 7.5, md: 7.5, sm: 'none', xs: 'none' },
        justifyContent: 'space-between',
        position: 'relative',
        overflowX: 'hidden',
        overflowY: 'auto'
    },
    pageNameStyle: {
        display: 'flex',
        color: 'black',
        fontFamily: 'Nunito Sans',
        alignItems: { xl: 'center', lg: 'center', md: 'center', xs: 'none', sm: 'none' },
        zIndex: 1000,
        padding: { xl: '10px', lg: '10px', md: 'none', xs: 'none', sm: 'none' },
        paddingTop: '5px',
    },
    logoImageStyleContainer: {
        display: 'flex',
        width: '60px',
        alignItems: 'center',
        padding: '10px'
    },
    routesImageContainer: {
        display: {
            xs: 'none',
            sm: 'none',
            md: 'flex',
            lg: 'flex',
            xl: 'flex'
        },
        justifyContent: 'center',
        alignItems: 'center',
    },
    routesContainer: {
        marginTop: { xs: '45px', sm: '45px', md: '60px', xl: '65px', lg: '60px' },
        marginBottom: { xs: '100px', sm: '100px' },
        display: 'flex',
        justifyContent: 'center',
        overflowX: 'hidden',
        transform: 'translateY(-60px)',
        paddingBottom: '20px',
        zIndex: '1000'
    },
    contentMainContainer: {
        width: {
            xs: '100%',
            sm: '100%',
            md: '100%',
            lg: '100%',
            xl: '100%'
        },
        display: 'flex',
        height: '100vh',
        overflowX: 'hidden',
        overflowY: 'auto',
    },
    mobileViewLogout: {
        display:
        {
            xs: 'flex',
            sm: 'flex',
            md: 'none',
            lg: 'none',
            xl: 'none'
        },
        height: '80px',
        width: '30px',
        right: '20px',
        top: '20px',
        position: 'absolute',
        float: 'right',
        zIndex: 1000,
    },
    innerGridWrap: {
        display: {
            sm: 'none',
            xs: 'none',
            lg: 'flex',
            xl: 'flex',
            md: 'flex'
        },
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        height: '100vh',
        background: 'white'
    },
    defaultViewLogout: {
        flexDirection: 'column',
        position: 'absolute',
        display: {
            xs: 'none',
            sm: 'none',
            md: 'flex',
            lg: 'flex',
            xl: 'flex'
        },
        width: {
            lg: '33px',
            md: '28px',
            xl: '30px'
        },
        alignItems: "center",
        justifyContent: "center",
        bottom: '10px',
    },
    routesDefault: {
        width: '100vw',
        height: '100vh',
    },
    mobileVersionNavLinks: {
        display: {
            sm: 'flex',
            xs: 'flex',
            md: 'none',
            lg: 'none',
            xl: 'none'
        },
        position: {
            xs: 'fixed',
            sm: 'fixed'
        },
        width: '99%',
        flexDirection: 'row',
        height: '7vh',
        alignItems: 'center',
        justifyContent: 'space-around',
        bottom: '0px',
        paddingTop: '23px',
        paddingBottom: { xs: '20px', sm: '20px' },
        background: '#FFFFFF',
        borderRadius: '30px 30px 0 0',
        boxShadow: '0 3px 11px 0 rgba(2,118,179,0.24)',
    },
    LogOutStyle: {
        width: '60px',
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    Indicator: {
        position: 'absolute',
        width: '100%',
        color: 'blue',
        height: '40px',
        display: { xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' }
    },
    ArrowBack: {
        cursor: 'pointer',
        width: { sm: '13px', xs: '13px', xl: '25px', lg: '25px' },
        height: '30px',
        color: 'white',
        marginRight: '12px',
        marginLeft: '12px',
    },
    LogOutGrid: {
        display: {
            xs: 'block',
            sm: 'block',
            md: 'none',
            lg: 'none',
            xl: 'none'
        },
    },
    PageNameMainGrid: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        border: 'solid 2px'
    },
    logOutContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    LogoImageStyle: {
        height: '60px',
        width: '700px'
    }
}
