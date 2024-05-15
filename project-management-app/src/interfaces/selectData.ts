import { SelectChangeEvent } from "@mui/material";
import { FormikErrors } from "formik";

export interface Option {
    value: string;
    label: string;
}

export interface CustomSelectProps {
    id: string;
    name: string;
    label: string;
    value: string | Date | undefined;
    placeholder: string;
    options: Option[] | undefined;
    onChange: (event: SelectChangeEvent<string>) => void;
    onBlur: (event: React.FocusEvent<{}>) => void;
    error?: boolean;
    errorMessage: string | FormikErrors<Date> | undefined;
}