import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../axios/base.service";

const refreshTokenApi = createAsyncThunk(
    'auth/refreshToken',
    async (tokens: { accessToken: string; refreshToken: string }, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post("/user/refreshToken", {
                accessToken: tokens.accessToken,
                refreshToken: tokens.refreshToken,
            });

            if (response.data.isSucceed) {
                // Return only the token data, no need to return the whole response
                return response.data.data;
            } else {
                return rejectWithValue("Refresh token failed");
            }
        } catch (error) {
            console.error(error);
            return rejectWithValue("Refresh token failed");
        }
    }
);

export default refreshTokenApi;
