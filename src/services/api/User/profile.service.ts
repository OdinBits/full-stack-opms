import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../axios/base.service";
import { iAppResponse } from "../../shared/interfaces/iAppResponse";

export const profileApi = createAsyncThunk(
    'auth/profile',
    async () => {
        try {
            const response = await axiosInstance.post<iAppResponse<unknown>>(
                '/user/profile'
            );

            return response.data;
        } catch (ex) {
            console.log(ex);
            throw ex;
        }
    }
);