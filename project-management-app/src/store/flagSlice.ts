// flagSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FlagState {
    isFlagSet: boolean;
}

const initialState: FlagState = {
    isFlagSet: false,
};

const flagSlice = createSlice({
    name: 'flag',
    initialState,
    reducers: {
        setFlag: (state, action: PayloadAction<boolean>) => {
            console.log("in flag reducer");
            state.isFlagSet = action.payload;
        },
    },
});

export const { setFlag } = flagSlice.actions;
export default flagSlice.reducer;
