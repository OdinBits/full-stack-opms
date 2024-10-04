import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../axios/base.service";
import { iAppResponse } from "../../shared/interfaces/iAppResponse";

export const register = createAsyncThunk(
    'auth/register',
    async (payload: { email: string; password: string }) => {
        try {
            const response = await axiosInstance.post<iAppResponse<object>>(
                '/user/register',
                {
                    email: payload.email,
                    password: payload.password,
                }
            );

            return response.data;
        } catch (ex) {
            console.log(ex);
            throw ex;
        }
    }
);