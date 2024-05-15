import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { AuthState, initialAuthState } from '../interfaces/authData';
import { authenticateUser } from '../api/sendAuthData.service';



const authSlice = createSlice({
    name: 'auth',
    initialState:initialAuthState,
    reducers: {
        setAuthStatus: (state, action: PayloadAction<AuthState>) => 
        {
            state.isValid = action.payload.isValid;
            state.message = action.payload.message;
            state.color = action.payload.color;
        },
    },
    extraReducers : builder =>
    {
        builder.addCase(authenticateUser.pending, (state) => {
                state.loading = true
            })

        builder.addCase(authenticateUser.fulfilled , (state,action) => {
            state.loading = false
            state.isValid  = action.payload.isValid
            state.color = action.payload.color
            state.message = action.payload.message
            state.email = action.payload.email
            state.name = action.payload.name
        })

        builder.addCase(authenticateUser.rejected , (state,action) => {
            state.loading = false
            state.isValid = false
            state.color = 'red'
            state.message = action.error.message
        })
    }
});

export const { setAuthStatus } = authSlice.actions; 
export default authSlice.reducer;
