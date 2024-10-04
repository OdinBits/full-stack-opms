import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 

const AxiosApiInterceptor = () => {
    const navigate = useNavigate(); // To navigate to different routes

    useEffect(() => {
        // Request interceptor: You could add common headers here if needed
        const requestInterceptor = axios.interceptors.request.use(
            (config) => {
                // Add headers or modify request config if needed
                console.info(`Sending request to ${config.url}`);
                return config;
            },
            (error) => {
                console.error("Error in request: ", error);
                return Promise.reject(error);
            }
        );

        // Response interceptor to handle various status codes
        const responseInterceptor = axios.interceptors.response.use(
            (response) => {
                // Success response, return it
                console.info("Response received successfully.");
                return response;
            },
            (error) => {
                if (error.response) {
                    const { status } = error.response;

                    // Pass the error response to the caller (e.g., Redux slice)
                    if (status === 401) {
                        console.warn("Unauthorized - redirecting to login.");
                        
                        // Delay the navigation to login to allow the Redux slice or state to handle it
                        setTimeout(() => {
                            navigate('/login');
                        }, 5000); // Short timeout to allow state handling
                    }

                    // Handle 403 Forbidden (e.g., user does not have permissions)
                    else if (status === 403) {
                        console.error("Forbidden - user lacks permissions.");
                        alert("You do not have permission to access this resource.");
                    }

                    // Handle 404 Not Found (e.g., resource doesn't exist)
                    else if (status === 404) {
                        console.warn("Resource not found.");
                        alert("The requested resource could not be found.");
                    }

                    // Handle 429 Too Many Requests (e.g., rate limiting)
                    else if (status === 429) {
                        console.warn("Too many requests - try again later.");
                        alert("You are sending too many requests. Please wait and try again.");
                    }

                    // Handle 500+ Server Errors
                    else if (status >= 500) {
                        console.error("Server error - try again later.");
                        alert("Server encountered an error. Please try again later.");
                    }

                    // Log any other status code
                    else {
                        console.error(`Error: Received status code ${status}`);
                    }
                } else if (error.request) {
                    // Handle no response from server (e.g., network error)
                    console.error("Network error or no response from server.");
                    alert("Network error - please check your connection.");
                } else {
                    // Handle other errors (e.g., Axios configuration issues)
                    console.error("Error in Axios setup: ", error.message);
                }

                // Return the error so the caller (e.g., Redux slice) can handle it
                return Promise.reject(error);
            }
        );

        // Cleanup: Eject interceptors when component unmounts
        return () => {
            axios.interceptors.request.eject(requestInterceptor);
            axios.interceptors.response.eject(responseInterceptor);
        };
    }, [navigate]);

    return null; // This component does not render anything in the UI
};

export default AxiosApiInterceptor;
