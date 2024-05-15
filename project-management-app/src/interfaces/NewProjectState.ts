export interface NewProjectState
{
    projectInfo:string;
    reason:string;
    type:string;
    division:string;
    category:string;
    priority:string;
    department:string;
    startDate:Date|null;
    endDate:Date|null;
    location:string;
}

export const initialNewProjectState : NewProjectState =
{
    projectInfo: "",
    reason: "",
    type: "",
    division: "",
    category: "",
    priority: "",
    department: "",
    startDate: null,
    endDate: null,
    location: "",
}
