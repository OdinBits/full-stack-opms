import { createTheme } from "@mui/material";

export const tableHeadTheme = createTheme({
    components: {
        MuiTableHead: {
            styleOverrides: {
                root: {
                    background: "#EBF5FF",
                    position: 'sticky',
                    mx: 'auto',
                },
            },
        },
    },
});


export const tableHeadCell = 
{
    fontSize: ' 16px', 
    fontWeight: 'bold',
    fontFamily:'Nunito Sans',
    color:'#3F3F3F'
}