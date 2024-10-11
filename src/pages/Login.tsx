import React, { useEffect, useRef } from 'react';
import { logo, appBg } from '../constants/images';
import { TextFieldRewired } from '../components';
import { Formik } from 'formik';
import login from '../redux/thunks/loginApiThunk';
import { Button, CircularProgress } from '@mui/material';
import { loginFormSchema } from '../validation/loginSchema';
import { useAppDispatch, useAppSelector } from '../hooks';
import { useNavigate } from 'react-router-dom';
import { LoginFields, initialLoginFields, cardProp } from '../interfaces/ILoginState';
import styles from '../styles/login.module.css';

const Login = () => {
    const [notificationMessage, setNotificationMessage] = React.useState<string | undefined>(undefined);
    
    const formikRef = useRef<unknown>(null);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const loading = useAppSelector(state => state.loginState.loading);
    const message = useAppSelector(state => state.loginState.data?.message);
    const isUser = useAppSelector(state => state.loginState.data?.data?.isUser);

    // Handle form submission
    const handleSubmit = async (values: LoginFields) => {
        await dispatch(login(values));
    };

    // Handle side effects for login messages
    useEffect(() => {
        if (message) {
            setNotificationMessage(message);
        }

        if (isUser) {
            setTimeout(() => navigate('/app/dashboard'), 2500);
        }
    }, [message, isUser, navigate]);

    return (
        <div className={styles.loginContainer}>
        <img src={appBg} alt="header background" className={styles.headerImage} />
        <div className={styles.loginContent}>
            <img src={logo} alt='logo' className={styles.loginLogo} />
            <h5 className={styles.loginTitle}>Project Management System</h5>

            <Formik
                initialValues={initialLoginFields}
                validationSchema={loginFormSchema}
                onSubmit={(values, actions) => {
                    handleSubmit(values);
                    actions.resetForm(); // Reset form after submission
                }}
            >
                {(props) => {
                    formikRef.current = props;
                    return (
                        <form onSubmit={props.handleSubmit} className={styles.loginForm}>
                            <h4 className={styles.formHeading}>Login to get Started</h4>
                            {cardProp.map(fields => (
                                <TextFieldRewired
                                    key={fields.id}
                                    fields={{ ...fields, disabled: loading }}
                                    props={props}
                                    sx={{ marginTop: '20px', marginBottom: '16px', color: 'black' }}
                                />
                            ))}
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={styles.loginButton}
                                disabled={loading} // Disable button while loading
                            >
                                {loading ? <CircularProgress size={24} color="inherit" /> : 'Submit'}
                            </Button>
                        </form>
                    );
                }}
            </Formik>

            <div className={styles.messageContainer}>
                <h5 className={`${styles.messageText} ${notificationMessage ? styles.visibleMessage : styles.hiddenMessage} 
                    ${isUser === false ? styles.errorMessage : isUser === true ? styles.successMessage : ''}`}>
                    {notificationMessage}
                </h5>
            </div>
        </div>
    </div>
    );
};

export default Login;
