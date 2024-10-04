import { CreateProject, initialCreateProjectApiState } from "../../interfaces/IProjects"
import createProjectApi from "../thunks/createProjectThunk"
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

const createProjectSlice = createSlice({
    name: "createProjectSlice",
    initialState: initialCreateProjectApiState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createProjectApi.pending, (state) => {
                state.loading = true;
            })
            .addCase(createProjectApi.fulfilled, (state, action: PayloadAction<CreateProject>) => {
                state.loading = false;
                state.data = action.payload
            })
            .addCase(createProjectApi.rejected, (state) => {
                state.loading = false;
            });
    }
})

export default createProjectSlice.reducer;