// index.d.ts or global declaration file
import { SxProps } from "@mui/material";

declare global {

    type InputState = {
        fields: {
            id: string;
            name: string;
            label: string;
            type: string;
            placeholder?: string;
            multiline?: boolean;
            rows?: number;
            disabled?: boolean;
        };
        props: {
            handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
            handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
            values: Record<string, unknown>;
            errors: Record<string, string | undefined>;
            touched: Record<string, boolean>;
        };
        sx?: SxProps;
    };

    type SubmissionState = {
        submitForm: unknown;
    };
}

export {};
