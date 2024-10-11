import { createAsyncThunk } from "@reduxjs/toolkit";
import { initialLoginResponse, LoginFields, LoginResponse } from "../../interfaces/ILoginState";
import { formatErrorResponse } from "../../utils/formateErrorResponse";
import axiosInstance from "../../services/base.service";

const loginThunk = createAsyncThunk(
    'loginThunk',
    async (payload: LoginFields, { rejectWithValue }) => {
        try {
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

export default loginThunk;
