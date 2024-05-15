import { createSlice } from "@reduxjs/toolkit";
import { addProjectThunk } from "../api/addProjectData.service";
import { initialProjectState } from "../interfaces/InitialProjectState";

function isAxiosError(error: unknown): error is { response: { data: { status?: string; message?: string; }; }; } {
    return typeof error === "object" && error !== null && "response" in error && "data" in (error as any).response;
}


const projectSlice = createSlice({
    name: "project",
    initialState: initialProjectState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addProjectThunk.pending, (state) => {
            state.loading = true;
            state.error = undefined;
            state.status = undefined;
            state.message = undefined;
        });
        builder.addCase(addProjectThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.error = undefined;
            state.status = action.payload.status; // Capture status from response
            state.message = action.payload.message; // Capture message from response
        });
        builder.addCase(addProjectThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;

            if (isAxiosError(action.error)) {
                // Safely access the response data
                state.status = action.error.response.data.status;
                state.message = action.error.response.data.message;
            }
        });
    },
});

export const projectReducer = projectSlice.reducer;

