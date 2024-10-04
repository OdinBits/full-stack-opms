import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const TextFieldRewired: React.FC<InputState> = ({ fields, props, sx }) => {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);

    return (
        <TextField
            id={fields.id}
            label={fields.label}
            name={fields.name}
            type={fields.type === 'password' && showPassword ? 'text' : fields.type}
            placeholder={fields.placeholder}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values[fields.name]}
            error={Boolean(props.errors[fields.name] && props.touched[fields.name])}
            helperText={props.errors[fields.name] && props.touched[fields.name] ? props.errors[fields.name] : undefined}
            multiline={fields.multiline}
            rows={fields.rows}
            disabled={fields.disabled}
            sx={sx}
            slotProps={{
                input: {
                    autoComplete: "off", // Prevent autofill
                    endAdornment: fields.type === 'password' && (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                edge="end"
                                disabled={fields.disabled}
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    ),
                }
            }}
        />
    );
};

export default TextFieldRewired;
