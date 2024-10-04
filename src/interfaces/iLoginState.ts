

export const initialLoginFields = {
    email: '',
    password: '',
};

export interface LoginFields {
    email: string;
    password: string;
};

// Define the array of fields
export const cardProp = [
    {
        id: '1',
        type: 'text',
        name: 'email',
        label: 'Email',
        placeholder: 'Enter your email',
        multiline: false, // Set to true if you want this field to be multiline
        rows: 1,          // Only applicable if multiline is true
        disabled: false,  // Set to true if you want to disable this field
    },
    {
        id: '2',
        type: 'password',
        name: 'password',
        label: 'Password',
        placeholder: 'Enter your password',
        multiline: false,
        rows: 1,
        disabled: false,
    }
];


export interface LoginResponse {
    isUser: boolean;
    userId: string | null;
    email: string | null;
    fullName: string | null;
    companyName: string | null;
    description: string | null;
    role: string | null;
}

export const initialLoginResponse: LoginResponse = {
    isUser: false,
    userId: null,
    email: null,
    fullName: null,
    companyName: null,
    description: null,
    role: null,
}

// iLoginState interface
export interface iLoginState {
    loading: boolean;
    data: ServiceResponse<LoginResponse> | null; // Ensure it matches your intended structure
}

export const initialLoginState: iLoginState = {
    loading: false,
    data: null,
}
