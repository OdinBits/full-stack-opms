import { Project } from "./ResponseData";

export interface SearchParams {
    e: Project[];
    sortColumn: string;
    sortOrder: 'asc' | 'desc';
    query: string;
}

export interface SearchInputProps {
    value: string;
    setQuery: (value: string ) => void;
    placeholder: string;
}