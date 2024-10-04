import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../services/base.service";
import { iLogoutResponse } from "../../shared/interfaces/iAuthState";

export const logout = createAsyncThunk(
    'auth/logout',
    async () => {
        try {
            const response = await axiosInstance.post<iLogoutResponse<boolean>>(
                '/user/logout'
            );

            return response.data;
        } catch (ex) {
            console.log(ex);
            throw ex;
        }
    }
);