import { createTheme } from '@mui/material/styles';

export const commonStylesTheme = createTheme({
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontFamily: 'Nunito Sans',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '18px',
                    transition: 'background-color 0.3s ease-in-out',
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    fontSize: '16px',
                    color: '#3F3F3F',
                    fontFamily: 'Nunito Sans'
                }
            }
        }
    },
});

export const tableRowStyles = {
    tableStatusData: {
        fontFamily: 'Nunito Sans',
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#00284C'
    },
    startButtonStyle: {
        width: {xs:'30%', sm:'30%',md: '65px',lg : '70px', xl:'70px'},
        height: {md: '25px',lg: '25px',xl:'27px'},
        textTransform: 'none',
        textAlign:'center',
        fontSize: '14px',
        color:'black',
        transition: 'background-color 0.3s ease-in-out',
        ':hover': { background: 'rgba(70, 130, 180, 0.4)', color: 'black' },
        border:'solid 2px'
    },
    closeAndCancelButtonStyle: {
        width: {xs:'30%', sm:'30%',md: '65px',lg : '70px', xl:'70px'},
        height: {md: '25px',lg: '25px',xl:'27px'},
        textAlign:'center',
        // color: '#025AAB',
        color:'black',
        // backgroundColor:'white',
        textTransform: 'none',
        fontSize: '14px',
        border: '1px solid #025AAB',
        transition: 'background-color 0.3s ease-in-out',
        ':hover': { background: 'rgba(70, 130, 180, 0.4)', color: 'black' },
    },
    defaultProjectName: {
        fontSize: '16px',
        fontWeight: 'bold',
        fontFamily: 'Nunito Sans',
        color: '#414950'
    },
    rowStyle:{
        width: '100vw', 
        postion: 'fixed' 
    },
    cellStyle: {
        width: '40%', 
        fontSize: '16px' 
    },
    dateOutputStyle : {
        fontSize: '15px', 
        color: '#6B6B6B'
    }
};
