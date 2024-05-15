// tableauThunk.js

import { createAsyncThunk } from "@reduxjs/toolkit";
import { options } from "../interfaces/tableuOptions";

interface StateData {
    viz: {
        refreshChart: () => Promise<void>;
    } | null;
    loading: boolean;
    message: string;
}

export const initialVizState: StateData = {
    viz: null,
    loading: false,
    message: '',
};

export const tableauThunk = createAsyncThunk(
    'tableau/initializeTableau',
    async (payload: any) => {
        const res = new window.tableau.Viz(
            document.getElementById('tableau-viz'),
            'https://prod-apnortheast-a.online.tableau.com/t/nishantchavanf7d66ea4de/views/DeptWiseData_17088554442270/Dept',
            options
        );

        // Use a wrapper function to ensure that refreshDataAsync is called within the Redux action
        const refreshChartWrapper = async () => {
            await res.refreshDataAsync();
        };

        const viz = {
            refreshChart: refreshChartWrapper
        };

        console.log("viz from thunk", viz)

        return viz;
    }
);
