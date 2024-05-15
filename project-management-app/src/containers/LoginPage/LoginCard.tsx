import React from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { Button, Card, CardContent, Grid, Typography, ThemeProvider, Stack, Box } from "@mui/material";
import { Formik } from "formik";
import { useAppDispatch, useAppSelector } from '../../store';
import CustomTextField from '../../components/CustomeTextField/TextField';
import { globalTheme } from '../../themes/globalTheme';
import { authenticateUser } from '../../api/sendAuthData.service';
import { loginStyles } from './loginStyles';
import { initialUserCredentials } from '../../interfaces/UserCredentialsState';
import { loginSchema } from '../../interfaces/LoginSchema';
import haierLogo from '../../assets/images/Login/Haier-Logo.png';

const LoginCard: React.FC = () => {
    const navigate = useNavigate();
    const { isValid } = useAppSelector(state => state.auth)
    const [showPassword, setShowPassword] = React.useState(false);
    const dispatch = useAppDispatch();

    return (
        <ThemeProvider theme={globalTheme}>
            {/* <Card sx={loginStyles.loginCard}>
                <CardContent> */}
            {/* <Typography variant="h5" gutterBottom sx={loginStyles.cardTitle}>
                        Login to get Started
                    </Typography> */}
            <Formik
                initialValues={initialUserCredentials}
                validationSchema={loginSchema}
                onSubmit={async (values, actions) => {
                    dispatch(authenticateUser(values));

                    if (isValid) {
                        actions.resetForm();
                        navigate('/Contents');
                    }
                }
                }
            >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                    <Form onSubmit={handleSubmit} >
                        <Stack direction='column' p={2}>
                            <Box component='img' alt='haierLogo' src={haierLogo} sx={{color:'white', width:'22%',display:'flex',alignSelf:'center',paddingBottom:'5px'}}/>
                            <Typography variant='subtitle1'  textAlign='center'>Pune Industrial Park (PIP)</Typography>
                            <Typography variant='subtitle1'  textAlign='center'>Online Project Management System (OPMS)</Typography>
                        </Stack>
                        <Box sx={{boxShadow:{sm:'0 7px 18px 0 rgba(2,118,179,0.13)'},boxSizing:'border-box', width:{md:'410px'}, borderRadius:{sm:'10px'}, margin:'auto', padding:{md:'10px'},background:'#FFFFFF'}}>
                        
                                <Stack direction='column' spacing={2} p={2} >
                                    <Typography sx={{padding:'15px',textAlign:'center',fontFamiliy:'Nunito Sans',fontSize:'22px',color:'#3F3F3F'}}>Login to get started</Typography>
                                    <CustomTextField
                                        name="username"
                                        label="Email"
                                        type="text"
                                        value={values.username}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        error={Boolean(errors.username && touched.username)}
                                        errorMessage={errors.username}
                                    />
                                    <div style={{paddingTop:'5px'}}>
                                        <CustomTextField
                                        name="password"
                                        label="Password"
                                        type="password"
                                        value={values.password}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        error={Boolean(errors.password && touched.password)}
                                        errorMessage={errors.password}
                                        showPassword={showPassword}
                                        setShowPassword={setShowPassword}
                                    />
                                    <Typography variant="body2" color="textSecondary" align="right" sx={loginStyles.forgetPasswordContainer}>
                                        <Link to="#!" className="text-dark-50" style={loginStyles.forgetPasswordText}>
                                            Forgot password?
                                        </Link>
                                    </Typography>
                                    </div>
                                    <Grid sx={{ ...loginStyles.loginButtonContainerGrid, padding:'20px'}}>
                                        <Grid sx={loginStyles.loginButtonInnerGrid}>
                                            <Button
                                                type="submit"
                                                fullWidth
                                                sx={loginStyles.loginButton}
                                            >
                                                Login
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Stack>
                            
                        </Box>
                    </Form>
                )}
            </Formik>
            {/* </CardContent>
            </Card> */}
        </ThemeProvider>
    );
}
export default LoginCard;