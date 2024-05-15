
import { createSlice } from '@reduxjs/toolkit';
import { initialDashboardSliceState } from '../interfaces/DashboardSliceState';
import { getDashboardDataThunk } from '../api/getDashboardData.service';

const projectSlice = createSlice({ 
    name: 'dashBoard',
    initialState: initialDashboardSliceState,
    reducers: {},
    extraReducers: builder => 
    {
        builder.addCase(getDashboardDataThunk.pending , state => {
            state.loading = true
        })
        builder.addCase(getDashboardDataThunk.fulfilled, (state,action) => {
            state.loading = false
            state.data = action.payload
            state.error = ""
        })
        builder.addCase(getDashboardDataThunk.rejected , (state,action) =>
        {
            state.loading = false
            state.data = null
            state.error = action.error.message
        })
    }
});

export default projectSlice.reducer;
