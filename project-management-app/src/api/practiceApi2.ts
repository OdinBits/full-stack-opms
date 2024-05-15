import { createAsyncThunk } from "@reduxjs/toolkit";
import { BarGraphData } from "../interfaces/BarGraphData";
import axiosInstance from "./base.service";
import axios from "axios";


export const practiceApi2 = async () => {                                                            
    try {
        const response = await axios.get(`https://reqres.in/api/users?page=2`);
        // console.log("practice response2 ", response);
        // console.log("data inside the data2", response.data)
        return response.data;
    } catch (error) {
        console.error(error)
    }
}