export interface ProjectSubmissionState {
    currentState: boolean;
    loading: boolean;
    error: string | null;
    message: any | null;
}

export const initialSubmissionState: ProjectSubmissionState = {
    currentState: false,
    loading: false,
    error: null,
    message: null
};