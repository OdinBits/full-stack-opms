import backgroundImagePath from '../../assets/images/Header/Header-bg.svg';

export const loginStyles = {
    loginCard: {
        margin: 'auto',
        borderRadius: '10px',
        mt: 3,
        mb: 2,
        boxShadow: {
            xs: 'none',
            sm: 'none',
            md: '0 7px 18px 0 rgba(2,118,179,0.13)',
            lg: '0 7px 18px 0 rgba(2,118,179,0.13)',
            xl: '0 7px 18px 0 rgba(2,118,179,0.13)'
        },
        width: {
            xs: '100vw', 
            lg: '410px', 
            xl:'450px',
            md: '40vw'
        },
        height: {
            lg:'475px',
        },
    },
    loginLogoGrid: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100px',
        width: '70px'
    },
    projectName: {
        paddingTop: '12px',
        color: 'white',
        fontSize: '18px'
    },
    loginContainer: {
        height: 'calc(100vh - 16px)',
        backgroundImage: `url("${backgroundImagePath}")`,
        backgroundSize: { 
            xs: 'auto 35%', 
            sm: 'auto 67%', 
            md: 'auto 67%', 
            lg: 'auto 67%', 
            xl: 'auto 67%' },
        backgroundRepeat: 'no-repeat',
        width: { 
            xs: '100%', 
            sm: '100%', 
            md: '100%', 
            lg: '100%', 
            xl: '100%' },
        margin: 'auto',
    },
    loginInnerGrid: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: '100%',
        overflowX: 'hidden',
        overflowY: 'auto',
        marginTop: '30px'
    },
    loginComponentGrid: {
        marginTop: { 
            xs: '10px', 
            sm: '10px', 
            md: 'none', 
            lg: '0px', 
            xl: '0px' }
    },
    loginCardComponentStyle: {
        marginTop: { 
            xs: '30px', 
            sm: '40px', 
            md: '0px', 
            lg: '0px', 
            xl: '0px' }
    },
    loginButtonInnerGrid: {
        width: { 
            xs: '100%', 
            sm: '50%', 
            md: '50%', 
            lg: '169px', 
            xl: '170px' },
        paddingTop: {xs:'50px',md:'0px'}
        // paddingTop: {
        //     xs:'70px',
        //     sm:'70px',
        //     md:'30px',
        //     lg:'30px',
        //     xl:'30px'
        // },
    },
    loginButtonContainerGrid: {
        display: 'flex', 
        justifyContent: 'center',
        alignItem:'center',
    },
    loginButton: {
        minWidth: '150px',
        fontSize:'16px',
        borderRadius:'18px',
        background:'#025AAB',
        color:'#FFFFFF'
    },
    forgetPasswordContainer : {
        padding: '10px',
        textAlign:'right'
    },
    forgetPasswordText : {
        textDecoration: 'none', 
        color: '#025AAB'
    },
    cardTitle : {
        marginTop: '40px', 
        margin: '20px', 
        textAlign: { 
            xs: 'left', 
            sm: 'left', 
            md: 'center', 
            lg: 'center', 
            xl: 'center' 
        }, 
        color: ' #3F3F3F' 
    },
    loginForm : {
        padding: '20px', 
        margin: '3px' 
    }
};