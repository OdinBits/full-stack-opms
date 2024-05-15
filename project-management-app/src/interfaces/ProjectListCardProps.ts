import { Project } from "./ResponseData";

export interface CardViewProps {
    countId: Project;
    Update: (status: string, id: string) => void;
}