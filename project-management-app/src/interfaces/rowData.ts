import { Project } from "./ResponseData";

export interface TableRowComponentProps {
    countId: Project;
    Update: (newStatus: string, id: string) => void;
}