import React from "react";
import { Grid, Typography, ThemeProvider, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../store/configureStore";
import "@fontsource/nunito-sans";
import LoginCard from "./LoginCard";
import { loginStyles } from "./loginStyles";
import LoginLogo from "../../components/Logos/loginLogo";
import { globalTheme } from "../../themes/globalTheme";
import loginBg from '../../assets/images/Login/loginbg1.svg'


const Login: React.FC = () => {
  const { color, message } = useSelector((state: RootState) => state.auth);

  return (
    <ThemeProvider theme={globalTheme}>
      <Box >
        <Box component='img' className="bgImage" sx={{ zIndex: '-12',  position: 'relative' , width:{md:'100%',xs:'100%'}}} alt='BgImage' src={loginBg}/>
        <Grid
          container
          justifyContent="center"
          sx={{
            position: 'absolute',
            bottom: '50%',
            left: '50%',
            transform: 'translate(-50%, 50%)',
          }}
        >
          <LoginCard />
        </Grid>
      </Box>
      {/* <Grid item sx={loginStyles.loginContainer} container justifyContent="center" alignItems="center">
      <Grid item sx= {loginStyles.loginInnerGrid}>
        <Grid sx={loginStyles.loginComponentGrid}>
          <LoginLogo/>
        </Grid>
        <Grid item sx={loginStyles.loginCardComponentStyle}>
          <LoginCard/>
        </Grid>
        <Grid className="login-message">
          <Typography sx={{color: color}}>{message}</Typography>
        </Grid>
      </Grid>
    </Grid> */}
    </ThemeProvider>
  );
};
export default Login;
