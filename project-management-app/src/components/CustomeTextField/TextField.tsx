import React from 'react';
import { TextField, InputLabel, IconButton, InputAdornment, Grid, Typography, ThemeProvider } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { CustomTextFieldProps } from '../../interfaces/CustomeTextFieldProps';
import { INVALID_USER_COLOR } from '../../constant/constant';
import { globalTheme } from '../../themes/globalTheme';

const CustomTextField: React.FC<CustomTextFieldProps> = ({
    id,
    name,
    label,
    type,
    placeholder,
    value,
    onBlur,
    onChange,
    error,
    errorMessage,
    showPassword = false,
    setShowPassword,
    style
}) => {
    const handleToggleShowPassword = () => {
        if (setShowPassword) {
            setShowPassword(!showPassword);
        }
    };

    const formattedErrorMessage = typeof errorMessage === 'object' ? Object.values(errorMessage).join(', ') : errorMessage;

    return (
        <ThemeProvider theme={globalTheme}>
            <Grid sx={style}>
                <InputLabel htmlFor={id}>{label}</InputLabel>
                <TextField
                    id={id}
                    fullWidth
                    sx={style}
                    name={name}
                    type={showPassword && type === 'password' ? 'text' : type}
                    placeholder={placeholder}
                    value={value || ''}
                    onChange={onChange}
                    onBlur={onBlur}
                    autoComplete="off"
                    InputProps={{
                        endAdornment: type === 'password' && setShowPassword && (
                            <InputAdornment position="end">
                                <IconButton onClick={handleToggleShowPassword} edge="end">
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                {error && (
                    <Typography sx={INVALID_USER_COLOR}>
                        {formattedErrorMessage || 'Invalid input'}
                    </Typography>
                )}
            </Grid>
        </ThemeProvider>
    );
};

export default CustomTextField;
