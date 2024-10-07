
// redux/slices/pageSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { navLinks } from '../../interfaces/INavLinks';

interface PageState {
    pageName: string;
}

const initialState: PageState = {
    pageName: navLinks[0].label, // Default page name
};

const PageNameSlice = createSlice({
    name: 'PageNameSlice',
    initialState,
    reducers: {
        setPageName: (state, action: PayloadAction<string>) => {
            state.pageName = action.payload;
        },
    },
});

export const { setPageName } = PageNameSlice.actions;
export default PageNameSlice.reducer;
