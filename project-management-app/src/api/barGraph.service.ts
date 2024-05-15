import { createAsyncThunk } from "@reduxjs/toolkit";
import { BarGraphData } from "../interfaces/BarGraphData";
import axiosInstance from "./base.service";


const fetchBarGraphData = createAsyncThunk('barGraph/fetchData', async () => {                                                            
    try {
        const response = await axiosInstance.get<BarGraphData>(`/barGraph`);
        return response.data;
    } catch (error) {
        console.error(error)
    }
})

export default fetchBarGraphData;