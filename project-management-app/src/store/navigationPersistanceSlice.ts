import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialActiveLink } from "../interfaces/NavLinks";

const navigationSlice = createSlice({
    name: 'navLinks',
    initialState: initialActiveLink,
    reducers: {
        setNavLink: (state, action: PayloadAction<number>) => {
            state.isActive = action.payload;
        },
        updateHistory: (state, action: PayloadAction<string>) => {
            state.history = [...(state.history || []), action.payload];
        },
        resetHistory: (state) => {
            state.history = [];
        },
        popHistory: (state) => {
            state.history.pop();
        }
    }
});

export const { setNavLink, updateHistory, resetHistory, popHistory } = navigationSlice.actions;
export default navigationSlice.reducer;
