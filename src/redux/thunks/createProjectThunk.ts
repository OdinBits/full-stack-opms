import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../services/base.service";
import { CreateProjectFields } from "../../interfaces/IProjects";

const createProjectThunk = createAsyncThunk(
    'createProjectThunk',
    async(payload: CreateProjectFields) => {
        try {
            const response = 
            await axiosInstance.post('projects/create', {payload})
            return response.data;
        } catch (ex) {
            console.error(ex);
            throw ex;
        }
    }
)

export default createProjectThunk;