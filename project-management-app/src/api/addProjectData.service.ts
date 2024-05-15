import { createAsyncThunk } from "@reduxjs/toolkit";

import axiosInstance from "./base.service";
import { NewProjectState } from "../interfaces/NewProjectState";

export const addProjectThunk = createAsyncThunk(
    "project/addProject",
    async (payload: NewProjectState) => {
        try {
            const response = await axiosInstance.post("/CreateProject", payload);
            // Return the data from the backend as a resolved promise
            console.log("response of addproject",response)
            if(response.data.status === 'error') {
                // alert(response.data.message)
                return {status:response.data.status,message:response.data.message}
                // return thunkAPI.rejectWithValue({ status: "error", message: response.data.message })
            }
            return response.data;
        } catch (error:any) {
            console.error(error)
        }
    }
);
