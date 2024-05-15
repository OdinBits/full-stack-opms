export interface UserCredentials
{
    username: string;
    password: string;
    grant_type: string;
}

export interface Employee {
    id: number;
    name: string;
    emailId: string;
    mobileNumber: string;
    department: string;
    division: string;
    role: string | null;
    employeeId: string | null;
    isDeleted: boolean;
    isProjectCoordinator: boolean;
    isMobileAccess: boolean;
}


export const initialUserCredentials: UserCredentials = 
{
    username: "",
    password: "",
    grant_type: "password" //default
};


export const resType: Employee = {
    id: 0,
    name: "",
    emailId: "",
    mobileNumber: "",
    department: "",
    division: "",
    role: null,
    employeeId: null,
    isDeleted: false,
    isProjectCoordinator: false,
    isMobileAccess: false
}