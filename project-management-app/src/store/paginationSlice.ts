import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './configureStore';
import { getPaginatedDataThunk } from '../api/getPaginationData.service';
import { initialPageState } from '../interfaces/paginationStateData';

const paginationSlice = createSlice({
    name: 'pagination',
    initialState: initialPageState,
    reducers: {
        setPaginatedData: (state, action) => 
        {
            state.pageCount = action.payload.pageCount;
            state.currentPage = action.payload.currentPage;
            state.result = action.payload.result;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPaginatedDataThunk.pending, (state) => {
                state.loading = true;
                state.paginationError = null;
            })
            .addCase(getPaginatedDataThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.pageCount = action.payload.pageCount;
                state.result = action.payload.result;
            })
            .addCase(getPaginatedDataThunk.rejected, (state, action) => {
                state.loading = false;
                state.paginationError = action.error.message ?? 'Error fetching paginated data';
            });
    },
});

export const { setPaginatedData } = paginationSlice.actions;
export const selectPagination = (state: RootState) => state.pagination;
export default paginationSlice.reducer;
