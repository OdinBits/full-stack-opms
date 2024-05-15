
export const dashboardStyles = {
    cardOutliner: {
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'end',
        background: '#0CC9E8',
        height: {xl:'98px',lg:'98px',md:'98px',xs:'75px',sm:'75px'},
        position: "relative",
        boxShadow: ' 0 7px 18px 0 rgba(2,118,179,0.13)',
        borderRadius: '10px',
        margin:'7px', 
        width: { 
            xs: '120px', 
            sm: '110px', 
            md: '160px', 
            lg: '17%', 
            xl: '19%' },
    },
    mainContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'left',
        height: '120px',
        width: '100%',
        flexDirection: 'column',
        overflowX: 'auto',
        flexWrap: { 
            xs: 'wrap', 
            sm: 'wrap', 
            md: 'none', 
            lg: 'none', 
            xl: 'none' 
        }
    },
    innerCardStyle: {
        fontFamily: 'Nunito Sans',
        background: 'white',
        padding: '10px',
        width: '98%',
        borderRadius: '5px',
        marginLeft: '5px',
        height: '100px',
        boxShadow:'0 7px 18px 0 rgba(2,118,179,0.13)',
    },
    cardTitle: {
        fontFamily: 'Nunito Sans',
        fontSize: {xl:'16px',lg:'16px',md:'16px',sm:'14px',xs:'14px'},
        color: '#474D52'
    },
    cardResult: {
        fontFamily: 'Nunito Sans',
        fontSize: {xl:'40px',lg:'40px',md:'40px',sm:'24px',xs:'24px'},
        fontWeight:'bold',
        color: '#474D52'
    }
};
