import { createTheme } from "@mui/material";

export const customSelectTheme = createTheme({
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: '#3F3F3F',
                    fontSize: '16px',
                    fontFamily: 'Nunito Sans',
                }
            }
        },
        MuiInputLabel : {
            styleOverrides: {
                root: {
                    color: '#767676',
                    fontSize: '15px',
                    fontFamily: 'Nunito Sans',
                }
            }
        }
    }
});

export const errorStatus = {
    color:'red'
}