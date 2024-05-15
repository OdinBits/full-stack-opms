import { createAsyncThunk } from '@reduxjs/toolkit';
import { updateStatusParams } from '../interfaces/UpdateStatus';
import axiosInstance from './base.service';


export const updateProjectStatus = createAsyncThunk(
    'status/update', async (config: updateStatusParams) => {
        try {
            await axiosInstance.post(`/UpdateStatus`, config);
        } catch (error) {
            console.error(error);
        }
    }
);
