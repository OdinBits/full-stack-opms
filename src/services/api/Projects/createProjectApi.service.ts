import { createAsyncThunk } from "@reduxjs/toolkit";
import { CreateProject } from "../../../interfaces/IProjects";
import axiosInstance from "../../axios/base.service";

const createProjectApi = createAsyncThunk(
    'createProjectApi',
    async(payload: CreateProject) => {
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

export default createProjectApi;