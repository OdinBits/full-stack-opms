export interface updateStatusParams {
    newStatus: string;
    id: string;
}

export interface UpdateState {
    submit: boolean;
    message: string;
    color: string;
    loading: boolean;
    error: string | null;
}
export const initialUpdateState: UpdateState = {
    submit: false,
    message: '',
    color: '',
    loading: false,
    error: null,
};