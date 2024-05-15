export interface BarGraphData {
    str: number | null;
    strCount: number | null;
    fin: number | null;
    finCount: number | null;
    qlt: number | null;
    qltCount: number | null;
    man: number | null;
    manCount: number | null;
    sto: number | null;
    stoCount: number | null;
    hr: number | null;
    hrCount: number | null;
    projectPerLocation: any;
    departmentWise:any;
}

export interface BarGraphState {
    data: BarGraphData | undefined;
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: string | null;
}

export const initialBarState: BarGraphState = {
    data: undefined,
    loading: 'idle',
    error: null,
};