import { createSlice} from '@reduxjs/toolkit';
import { addProjectThunk } from '../api/addProjectData.service';
import { PROJECT_SUCCESSFULL } from '../constant/constant';
import { initialSubmissionState } from '../interfaces/projectSubmissionData';

const takeProjSubmissionSlice = createSlice({
    name: 'projectSubmissionState',
    initialState: initialSubmissionState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(addProjectThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addProjectThunk.fulfilled, (state) => {
                state.loading = false;
                state.currentState = true; 
                // state.message = PROJECT_SUCCESSFULL;
            })
            .addCase(addProjectThunk.rejected, (state, action) => {
                state.loading = false;
                state.message = action.error.message || '';
                console.log("error state from the slice",state.message);
            });
    },
});

export default takeProjSubmissionSlice.reducer;
