import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginResponse, initialLoginResponse, initialLoginState } from "../../interfaces/iLoginState";
import loginApi from "../../services/api/Authentication/loginApi.service";

// Adjust the type of your state and response to accommodate rejected cases properly

export const loginSlice = createSlice({
    name: "loginSlice",
    initialState: initialLoginState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginApi.pending, (state) => {
                state.loading = true;
            })
            .addCase(
                loginApi.fulfilled,
                (state, action: PayloadAction<ServiceResponse<LoginResponse>>) => {
                    state.loading = false;
                    state.data = action.payload;
                }
            )
            .addCase(loginApi.rejected, (state, action) => {
                state.loading = false;
                // Handle cases where action.payload is undefined or has an error
                state.data = action.payload
                    ? (action.payload as ServiceResponse<LoginResponse>)
                    : { success: false, message: "An unknown error occurred", data: initialLoginResponse };
            });
    },
});

export default loginSlice.reducer;
