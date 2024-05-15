export interface DashboardSliceState
{
    status: 'success' | 'loading' | 'error';
    data: 
    {
        totalProject: string;
        running: string;
        closed: string;
        delayed: string;
        cancelled: string;
    } | null;
    loading:boolean;
    error:string | undefined;
}

export const initialDashboardSliceState: DashboardSliceState =
{
    status: "success",
    loading: false,
    data: {
        totalProject: "0",
        running: "0",
        closed: "0",
        delayed: "0",
        cancelled: "0"
    },
    error: undefined
}

export interface DashboardData {
    totalProject: string;
    running: string;
    closed: string;
    delayed: string;
    cancelled: string;
}