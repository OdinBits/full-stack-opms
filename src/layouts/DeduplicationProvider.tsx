import { useEffect, ReactNode } from "react";
import axios, { InternalAxiosRequestConfig, Canceler } from "axios";

// Create a map to store ongoing requests
const requestMap = new Map<string, Canceler>();

// DeduplicationProvider component to wrap around the entire app
const DeduplicationProvider = ({ children }: { children: ReactNode }) => {
    useEffect(() => {
        // Add Axios request interceptor
        const requestInterceptor = axios.interceptors.request.use(
            (config: InternalAxiosRequestConfig) => {
                const requestKey = `${config.method}:${config.url}`;

                // If there's an ongoing request with the same key, cancel it
                const cancel = requestMap.get(requestKey);
                if (cancel) {
                    cancel(); // Cancel the ongoing request
                    requestMap.delete(requestKey); // Remove the canceled request
                }

                // Create a new cancel token and store it in the map
                const source = axios.CancelToken.source();
                config.cancelToken = source.token;
                requestMap.set(requestKey, source.cancel);

                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        // Add Axios response interceptor
        const responseInterceptor = axios.interceptors.response.use(
            (response) => {
                const requestKey = `${response.config.method}:${response.config.url}`;
                requestMap.delete(requestKey); // Remove request from the map after success
                return response;
            },
            (error) => {
                if (error.config) {
                    const requestKey = `${error.config.method}:${error.config.url}`;
                    requestMap.delete(requestKey); // Remove the request after failure
                }
                return Promise.reject(error);
            }
        );

        // Cleanup interceptors on component unmount
        return () => {
            axios.interceptors.request.eject(requestInterceptor);
            axios.interceptors.response.eject(responseInterceptor);
        };
    }, []);

    return <>{children}</>; // Render the wrapped children (App)
};

export default DeduplicationProvider;
