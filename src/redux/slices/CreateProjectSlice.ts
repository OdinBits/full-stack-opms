import { CreateProjectFields, initialCreateProjectState } from "../../interfaces/IProjects"
import createProjectThunk from "../thunks/createProjectThunk"
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

const createProjectSlice = createSlice({
    name: "createProjectSlice",
    initialState: initialCreateProjectState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createProjectThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(createProjectThunk.fulfilled, (state, action: PayloadAction<CreateProjectFields>) => {
                state.loading = false;
                state.data = action.payload
            })
            .addCase(createProjectThunk.rejected, (state) => {
                state.loading = false;
            });
    }
})

export default createProjectSlice.reducer;