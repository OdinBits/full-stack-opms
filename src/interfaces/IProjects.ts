export interface CreateProjectFields {
    projectTheme?: string; 
    reason?: string;       
    type?: string;         
    division?: string;     
    category?: string;     
    priority?: string;     
    department?: string;   
    startDate?: Date;      
    endDate?: Date;        
    location?: string;     
    userId: string;        
}

export const initialCreateProject: CreateProjectFields = {
    projectTheme: '',      
    reason: '',            
    type: '',              
    division: '',          
    category: '',          
    priority: '',          
    department: '',        
    startDate: undefined,  
    endDate: undefined,    
    location: '',          
    userId: ''             
};

export interface CreateProjectState {
    loading: boolean;
    data: CreateProjectFields;
}

export const initialCreateProjectState: CreateProjectState = {
    loading: false,
    data: initialCreateProject  // Corrected from 'date' to 'data'
};
