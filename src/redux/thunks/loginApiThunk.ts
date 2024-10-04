import { createAsyncThunk } from "@reduxjs/toolkit";
import { initialLoginResponse, LoginFields, LoginResponse } from "../../interfaces/iLoginState";
import { formatErrorResponse } from "../../utils/formateErrorResponse";
import axiosInstance from "../../services/base.service";

const loginApi = createAsyncThunk(
    'loginApi',
    async (payload: LoginFields, { rejectWithValue }) => {
        try {
            console.log('API Base URL:', import.meta.env.VITE_API_URL);

            const response = await axiosInstance.post<ServiceResponse<LoginResponse>>(
                `auth/login`, 
                payload
            );
            return response.data; // Return success response
        } catch (error) {
            // Pass the default error response for LoginResponse to formatErrorResponse
            const formattedError = formatErrorResponse<LoginResponse>(error, initialLoginResponse);
            return rejectWithValue(formattedError); // Use the formatted error response
        }
    }
);

export default loginApi;
