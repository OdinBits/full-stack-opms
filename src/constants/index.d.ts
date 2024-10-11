// src/index.d.ts
declare global {
    interface ServiceResponse<T> {
        success: boolean;
        message: string;
        data: T | null;
    }

    const defaultServiceResponse: <T>(data: T | null) => ServiceResponse<T>;
}

declare global {
    interface SearchInputProps {
        value: string;
        setQuery: (query: string) => void;
        placeholder?: string;
    }
}

declare global {

    type InputState<T = Record<string, unknown>> = {
        fields: {
            id: string | undefined; // Allow id to be either string or number
            name: string;
            label: string;
            type: string;
            placeholder?: string;
            multiline?: boolean;
            rows?: number;
            disabled?: boolean;
            options?: string[];
        };
        props: {
            handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | { value: unknown }>) => void;
            handleBlur: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
            values: T; // Make values generic
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
