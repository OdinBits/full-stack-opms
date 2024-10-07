import React, { useEffect, useRef } from 'react';
import { logo, appBg } from '../constants/images';
import { TextFieldRewired } from '../components';
import { Formik } from 'formik';
import login from '../redux/thunks/loginApiThunk';
import { Button, CircularProgress } from '@mui/material';
import { loginFormSchema } from '../validation/loginFormSchema';
import { useAppDispatch, useAppSelector } from '../hooks';
import { useNavigate } from 'react-router-dom';
import { LoginFields, initialLoginFields, cardProp } from '../interfaces/ILoginState';
import '../styles/LoginStyle.css';

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
        <div id='login-form' className='h-vh'>
            <img src={appBg} alt="header background" className="header-img" />
            <div className='flex flex-col items-center gap-8 relative mt-40 mb-5'>
                <img src={logo} alt='logo' className='logo-style' />
                <h5 className='text-center text-xl text-zinc-900'>Project Management System</h5>

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
                            <form onSubmit={props.handleSubmit} className='login-form'>
                                <h4 className='text-center mb-5 text-xl text-zinc-700'>Login to get Started</h4>
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
                                    className="login-button"
                                    disabled={loading} // Disable button while loading
                                >
                                    {loading ? <CircularProgress size={24} color="inherit" /> : 'Submit'}
                                </Button>
                            </form>
                        );
                    }}
                </Formik>

                {/* Dynamic Notification Message */}
                <div className='message-container mt-4'>
                    <h5 className={`transition-all duration-500 ${notificationMessage ? 'opacity-100' : 'opacity-0'} 
                        ${isUser === false ? 'text-red-500' : isUser === true ? 'text-green-500' : ''}`}>
                        {notificationMessage}
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default Login;
