// utils/errorFormatter.ts
import { AxiosError } from "axios";

// Format error response function with generics
export const formatErrorResponse = <T>(error: unknown, defaultErrorData: T): ServiceResponse<T> => {
    // Check if the error is an AxiosError
    if (error instanceof AxiosError) {
        // Backend provided a structured error response
        if (error.response && error.response.data) {
            return error.response.data as ServiceResponse<T>;
        }
        
        // Handle network errors (e.g., when the backend is offline)
        if (error.code === 'ERR_NETWORK' || error.message === 'Network Error') {
            return {
                success: false,
                message: "Unable to connect to the server. Please check your network connection.",
                data: defaultErrorData, // Return the default error data for the specific type
            };
        }
    }

    // Return a default error response for unknown errors
    return {
        success: false,
        message: "An unknown error occurred",
        data: defaultErrorData, // Return the default error data for the specific type
    };
};
