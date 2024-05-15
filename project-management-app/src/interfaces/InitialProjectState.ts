interface InitialNewProjectState {
    loading: boolean;
    error: string | undefined;
    status: string | undefined; // Added status property
    message: string | undefined; // Added message property
}

export const initialProjectState: InitialNewProjectState = {
    loading: false,
    error: undefined,
    status: undefined,
    message: undefined,
};
