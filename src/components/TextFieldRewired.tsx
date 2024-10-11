import React from 'react';
import { TextField, InputAdornment, IconButton, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const TextFieldRewired: React.FC<InputState> = ({ fields, props, sx }) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);

    return fields.type === 'select' ? (
        <FormControl fullWidth sx={sx} disabled={fields.disabled}>
            <InputLabel id={`${fields.id}-label`}>{fields.label}</InputLabel>
            <Select
                id={fields.id}
                labelId={`${fields.id}-label`}
                name={fields.name}
                value={props.values[fields.name] as string} // Type assertion for proper value handling
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                error={Boolean(props.errors[fields.name] && props.touched[fields.name])}
            >
                {fields.options?.map((option, index) => (
                    <MenuItem key={index} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    ) : (
        <TextField
            id={fields.id}
            label={fields.label}
            name={fields.name}
            type={fields.type === 'password' && showPassword ? 'text' : fields.type}
            placeholder={fields.placeholder}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values[fields.name] as string} // Type assertion for proper value handling
            error={Boolean(props.errors[fields.name] && props.touched[fields.name])}
            helperText={props.errors[fields.name] && props.touched[fields.name] ? props.errors[fields.name] : undefined}
            multiline={fields.multiline}
            rows={fields.rows}
            disabled={fields.disabled}
            sx={sx}
            InputProps={{
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
                autoComplete: "off", // Prevent autofill
            }}
        />
    );
};

export default TextFieldRewired;
