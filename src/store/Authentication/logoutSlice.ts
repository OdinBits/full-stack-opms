import { createSlice } from "@reduxjs/toolkit";
//import { jwtDecode } from "jwt-decode";
//import { RootState } from "../../Store";
import { logout } from "../../api/Authentication/logout.service";
import { initialSliceState } from "../../interfaces/iAuthState";

// export interface iUser {
//     Id: string;
//     RoleClaim: Array<string>;
//     UserName: string;
// }

// export interface iAuthState {
//     status: "idle" | "loading" | "failed";
//     accessToken?: string;
//     refreshToken?: string;
//     user?: iUser;
// }

// const initialState: iAuthState = {
//     status: "idle",
// };

export const authSlice = createSlice({
    name: "auth",
    initialState: initialSliceState,
    reducers: {
        // updateToken: (
        //     state,
        //     action: PayloadAction<{ accessToken: string; refreshToken: string }>
        // ) => {
        //     state.accessToken = action.payload.accessToken;
        //     state.refreshToken = action.payload.refreshToken;
        //     state.user = jwtDecode<iUser>(action.payload.accessToken);
        // },
        // resetToken: (state) => {
        //     state.accessToken = undefined;
        //     state.refreshToken = undefined;
        //     state.user = undefined;
        // },
        // setLoading: (state) => {
        //     state.status = "loading";
        // },
        // resetLoading: (state) => {
        //     state.status = "idle";
        // },
    },
    extraReducers: (builder) => {
        builder
            .addCase(logout.pending, (state) => {
                state.loading = true;
            })
            .addCase(logout.fulfilled, (state, action) => {
                state.loading = false;
                state.data.resData = action.payload;
            })
            .addCase(logout.rejected, (state) => {
                state.loading = false;
            });
    },
});

export default authSlice.reducer;