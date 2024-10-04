// Define the structure of the response data
interface resStruc {
    resMessage: string;
    resData: unknown; // This can be typed more specifically if you know the structure of the response data
}

// Define the state interface
export interface iAuthState {
    loading: boolean;
    data: resStruc;
    message: string;
}

export interface iLogoutResponse<T> {
    status: boolean;
    message: string;
    data: T;
}

// Initialize the default state for the slice
export const initialSliceState: iAuthState = {
    loading: false,
    data: {
        resMessage: '', // Initialize with an empty string or a default message
        resData: {},    // Initialize with an empty object, or a more specific default if needed
    },
    message: '', // Initialize with an empty string or a default message
};
