export interface CustomTextareaProps {
    id: string;
    name: string;
    value: string;
    placeholder: string;
    style: React.CSSProperties;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onBlur: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
    error?: boolean;
    errorMessage?: string | boolean;
}