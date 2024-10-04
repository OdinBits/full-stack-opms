import { createSlice } from "@reduxjs/toolkit";
// import { refreshToken } from "../../api/Authentication/auth.service";
//import { RootState } from "../../Store";
//import { iUser } from "./logoutSlice";
import { initialRefreshTokenState } from "../../interfaces/iRefreshTokent";
//import { jwtDecode } from "jwt-decode";
import refreshTokenApi from "../../services/api/Authentication/refreshTokenApi.service";
import { iUser } from "../../interfaces/iRefreshTokent";
import { jwtDecode } from "jwt-decode";
import { PayloadAction } from "@reduxjs/toolkit";

export const refreshTokenSlice = createSlice({
    name: "refreshToken",
    initialState: initialRefreshTokenState,
    reducers: {
        updateToken: (
            state,
            action: PayloadAction<{ accessToken: string; refreshToken: string }>
        ) => {
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            state.user = decodeToken(action.payload.accessToken);
        },
        resetToken: (state) => {
            state.accessToken = undefined;
            state.refreshToken = undefined;
            state.user = undefined;
        },
        setLoading: (state) => {
            state.status = "loading";
        },
        resetLoading: (state) => {
            state.status = "idle";
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(refreshTokenApi.pending, (state) => {
                state.status = "loading";
            })
            .addCase(refreshTokenApi.fulfilled, (state, action) => {
                state.status = "idle";
                state.accessToken = action.payload.accessToken;
                state.refreshToken = action.payload.refreshToken;
                state.user = decodeToken(action.payload.accessToken);
            })
            .addCase(refreshTokenApi.rejected, (state) => {
                state.status = "failed";
                state.accessToken = undefined;
                state.refreshToken = undefined;
                state.user = undefined;
            });
    },
});

const decodeToken = (token: string): iUser => {
    // Here we assume you have a decode function or a library like jwt-decode
    return jwtDecode<iUser>(token);
};

export const { updateToken, resetToken, setLoading, resetLoading } =
    refreshTokenSlice.actions;

// export const selectRefreshToken = (state: RootState) => state.refreshToken;
export default refreshTokenSlice.reducer;
