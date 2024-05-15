import { createSlice } from '@reduxjs/toolkit';
import { tableauThunk,initialVizState } from '../api/tableauAPI.service';


const tableauSlice = createSlice({
    name: 'tableauSlice',
    initialState: initialVizState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(tableauThunk.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(tableauThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.viz = action.payload; 
            console.log("this is from slice viz", state.viz)
        });

        builder.addCase(tableauThunk.rejected, (state, action) => {
            state.loading = false;
        });
    },
});


export default tableauSlice.reducer;