import Cookies from "js-cookie";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { INVALID_USER, VALID_USER, VALID_USER_COLOR } from "../constant/constant";
import { authStatus } from "../interfaces/authData";
import { UserCredentials } from "../interfaces/UserCredentialsState";
import axios from "axios";

export const authenticateUser = createAsyncThunk(
    'auth/authenticateUser',
    async (userCredentials: UserCredentials): Promise<authStatus> => {
        try {
            const userCredentialsCopy = JSON.parse(JSON.stringify(userCredentials));
            
            userCredentialsCopy.password = btoa(userCredentialsCopy.password);

            const headers = {
                'Content-Type': 'application/x-www-form-urlencoded'
            };

            const response = await axios.post(
                `http://localhost:54303/api/auth/login`,
                userCredentialsCopy,
                { headers } 
            );

            console.log("Response from login API", response);

            if (response && response.data) {

                localStorage.setItem('accessToken','Bearer' + response.data.access_token)
                
                const userRes = await axios.get('http://localhost:54303/api/user', {
                    headers: {
                        Authorization: `Bearer ${response.data.access_token}`,
                    },
                });

                console.log("UserData after authenication", userRes)

                Cookies.set('token', response.data.access_token, { expires: response.data.expires_in });

                return {
                    isValid: true,
                    message: VALID_USER,
                    color: VALID_USER_COLOR,
                    email: response.data.email || '',
                    name: response.data.name || ''
                };
            } else {
                return {
                    isValid: false,
                    message: INVALID_USER,
                    color: "red",
                    email: 'Invalid User',
                    name: 'No User'
                };
            }
        } catch (error) {
            console.error("Error during authentication:", error);
            return {
                isValid: false,
                message: INVALID_USER,
                color: "red",
                email: 'Invalid User',
                name: 'No User'
            };
        }
    }
);
