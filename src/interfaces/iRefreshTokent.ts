// Define the types for the auth state
export interface iUser {
    id: string;
    roleClaim: Array<string>;
    userName: string;
}

export interface iAuthState {
    status: "idle" | "loading" | "failed";
    accessToken?: string;
    refreshToken?: string;
    user?: iUser;
}

export const initialRefreshTokenState: iAuthState = {
    status: "idle",
};
