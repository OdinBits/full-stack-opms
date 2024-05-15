export interface AuthState 
{
    isValid: boolean;
    message: string | undefined;
    color: string;
    loading:boolean;
    email:string;
    name:string;
}


export const initialAuthState: AuthState = 
{
    isValid: false,
    message: '',
    color: '',
    loading: false,
    email:'',
    name:''
};

export interface authStatus
{
    isValid : boolean;
    message : string;
    color : string;
    email: string;
    name:string;
}