import { createTheme } from "@mui/material";

export const globalTheme = createTheme({
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontFamily: 'Nunito Sans',
                    color:' #FFFFFF'
                },
                h2: {
                    fontWeight: 'bold'
                }
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: '18px',
                    backgroundColor: '#035FB2',
                    color: '#FFFFFF',
                    '&:hover': {
                        backgroundColor: '#035FB2', 
                    },
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    borderRadius:'10px',
                    
                    input: {
                        height: '12px',
                    },
                    
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
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    background: "#EBF5FF",
                    position: 'sticky',
                    mx: 'auto',
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: '#767676',
                    fontSize: '14px',
                    fontFamily: 'Nunito Sans'
                }
            }
        },
        MuiInputAdornment: {
            styleOverrides: {
                root: {
                    height: '55px'
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    fontFamily: 'Nunito Sans',
                    color: ' #414950',
                    fontSize: '18px'
                }
            }
        }
    }
})