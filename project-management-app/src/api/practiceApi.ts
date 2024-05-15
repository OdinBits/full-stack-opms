import { createAsyncThunk } from "@reduxjs/toolkit";
import { BarGraphData } from "../interfaces/BarGraphData";
import axiosInstance from "./base.service";
import axios from "axios";


export const practiceApi = async () => {                                                            
    try {
        const response = await axios.get(`https://api.restful-api.dev/objects`);
        console.log("practice response ", response);
        console.log("data inside the data", response.data)
        return response.data;
    } catch (error) {
        console.error(error)
    }
}