import React from 'react';
import { Select, MenuItem, InputLabel, Typography, ThemeProvider, Box } from '@mui/material';
import { INVALID_USER_COLOR } from '../../constant/constant';
import { globalTheme } from '../../themes/globalTheme';
import { CustomSelectProps } from '../../interfaces/selectData';

const CustomSelect: React.FC<CustomSelectProps> = ({
    id, name, label, value, placeholder, options, onChange, onBlur, error, errorMessage
}) => {
    const stringValue = value instanceof Date ? value.toISOString() : value;
    return (
        <ThemeProvider theme={globalTheme}>
            <InputLabel>{label}</InputLabel>
            <Select
                fullWidth
                id={id}
                name={name}
                value={stringValue || ''}
                onChange={onChange}
                onBlur={onBlur}
                displayEmpty
                renderValue={(value) => (
                    <Box>
                        {value ? value.toString() : (
                            <Typography>
                                {placeholder}
                            </Typography>
                        )}
                    </Box>
                )}
            >
                {options?.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
            {error && (
                <Typography sx={INVALID_USER_COLOR}>
                    {typeof errorMessage === 'string' ? errorMessage : 'Invalid input'}
                </Typography>
            )}
        </ThemeProvider>
    );
};

export default CustomSelect;
