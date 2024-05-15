import { createSlice } from '@reduxjs/toolkit';
import { updateProjectStatus } from '../api/updateProjectStatus.service';
import { STATUS_OK, STATUS_UPDATE, VALID_USER_COLOR } from '../constant/constant';
import { initialUpdateState } from '../interfaces/UpdateStatus';

const statusSlice = createSlice({
    name: 'status',
    initialState : initialUpdateState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(updateProjectStatus.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateProjectStatus.fulfilled, (state, action) => {
                state.loading = false;
                state.submit = true;
                state.message = STATUS_UPDATE;
                state.color = VALID_USER_COLOR;
            })
            .addCase(updateProjectStatus.rejected, (state, action) => {
                state.loading = false;
                state.error = STATUS_OK;
            });
    },
});

export default statusSlice.reducer;
