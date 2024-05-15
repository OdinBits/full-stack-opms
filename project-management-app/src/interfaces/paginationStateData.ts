import { Project } from "./ResponseData";


export interface PaginationState {
    pageCount: number;
    currentPage: number;
    result: Project[];
    loading: boolean;
    paginationError: string | null;
}

export const initialPageState: PaginationState = {
    pageCount: 0,
    currentPage: 0,
    result: [],
    loading: false,
    paginationError: null,
};

export interface Data {
    pageCount: number;
    result: Project[];
}