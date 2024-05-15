import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "./base.service";

export const getDashboardDataThunk = createAsyncThunk(
    'dashBoard/getDashBoardData', async () => {
        try{
            const response = await axiosInstance.get(`/getAllCount`);
            return response.data.data;
        }catch(error)
        {console.error(error)}
    }
)