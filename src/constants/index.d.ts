// src/index.d.ts
declare global {
    interface ServiceResponse<T> {
        success: boolean;
        message: string;
        data: T | null;
    }

    const defaultServiceResponse: <T>(data: T | null) => ServiceResponse<T>;
}

export {};
