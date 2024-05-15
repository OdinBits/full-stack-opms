import React from 'react';
import { FormikErrors } from "formik";
import { Theme } from '@emotion/react';
import { SxProps } from '@mui/material';

export interface CustomTextFieldProps {
    id?: string;
    name: string;
    label: string;
    type: string;
    placeholder?: string;
    value: string | Date;
    onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    error?: boolean;
    errorMessage: string | FormikErrors<Date> | undefined;
    showPassword?: boolean;
    setShowPassword?: (show: boolean) => void;
    style?: SxProps<Theme>;
}