import { createSlice } from "@reduxjs/toolkit";
import { initialBarState } from "../interfaces/BarGraphData";
import fetchBarGraphData from "../api/barGraph.service";

const barGraphSlice = createSlice({
    name: 'barGraph',
    initialState: initialBarState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBarGraphData.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(fetchBarGraphData.fulfilled, (state, action) => {
                state.loading = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchBarGraphData.rejected, (state, action) => {
                state.loading = 'failed';
                state.error = action.payload as string;
            });
    },
})

export default barGraphSlice.reducer;