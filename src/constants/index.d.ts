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

export {};
