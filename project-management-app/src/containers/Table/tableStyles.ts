export const tableStyles = {
    formControlContainer: {
        display: 'flex',
        justifyContent: { 
            xs: 'space-between', 
            sm: 'space-between' },
        margin: '6px',
        borderRadius: '20px',
        position: 'relative',
        padding: '4px'
    },
    tableMainContainer: {
        background: { 
            xs: 'none', 
            sm: 'none', 
            md: 'none', 
            lg: 'white', 
            xl: 'white' 
        }, 
        border: 'none', 
        mx: 'auto',
        borderRadius: '20px',
    },
    paginationContainer: {
        display: 'flex', 
        justifyContent: 'center', 
        alignContent: 'center', 
        paddingTop: '20px',
        paddingBottom: '74px', 
        width: '95%', 
        bottom: { 
            xs: '40px', 
            sm: '50px', 
            md: '15px', 
            lg: '10px', 
            xl: '10px' },
        mx: 'auto',
    },
    tableComponentContainer: {
        width: "100%",
        overflowX: { 
            md: 'auto', 
            lg: 'auto', 
            xl: 'hidden' },
            paddingBottom:{xs:'0px',sm:'0px',md:'0px',lg:'20px',xl:'20px'}
    },
    muiTableComponent: {
        display: { 
            xs: 'none', 
            sm: 'none', 
            md: 'block', 
            lg: 'block', 
            xl: 'block', 
            height: '100%'}
    },
    searchInputBase: {
        width: { xs: '100%' },
        background: 'white',
        borderBottom: '1px solid #ccc',
        borderRadius: '20px',
    },
    stackInputContainer: {
        margin: '2px', 
        justifyContent: 'space-between',
    },
    stackInnerSearchGrid: {
        display: 'flex', 
        padding: '4px', 
        justifyContent: 'space-between' 
    },
    cardViewStyle: {
        display: { 
            lg: 'none', 
            xl: 'none', 
            md: 'none' },
    },
    sortIconDesktopStyle : {
        display: { 
            xs: 'none', 
            sm: 'none', 
            md: 'block', 
            lg: 'block', 
            xl: 'block' }, 
            width: {
                md:'18%',
                lg:'13%',
                xl:'12%'
            },
        marginRight : {
            md:'30px',
            lg:'40px',
            xl:'40px'
        },
    },
    sortIconMobileStyle: {
        display: { 
            xs: 'block', 
            sm: 'block', 
            md: 'none', 
            lg: 'none', 
            xl: 'none' }, 
            width: '10%',
    },
    movileViewProjectTheme: {
        fontFamily: "Nunito Sans",
        fontSize: '16px',
        fontWeight: 'bold',
        letterSpacing: '0.44px',
        color: '#414950',
    },
    snackBar: {
        width: '98%',
        position: 'absolute',
        top: '50%',
        left: '100%',
        transform: 'translate(-10%, -50%)',
        display: 'flex',
        justifyContent: 'center',
    },
    alertStyle: {
        fontSize: '25px', 
        width: '30%' , 
        border: 'solid 2px '
    }
};
