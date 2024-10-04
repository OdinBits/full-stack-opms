export interface CreateProject {
    projectTheme?: string; // Optional field
    reason?: string;       // Optional field
    type?: string;         // Optional field
    division?: string;     // Optional field
    category?: string;     // Optional field
    priority?: string;     // Optional field
    department?: string;   // Optional field
    startDate?: Date;      // Optional field
    endDate?: Date;        // Optional field
    location?: string;     // Optional field
    userId: string;        // Required field
}

export const initialCreateProject: CreateProject = {
    projectTheme: '',      // Initial value for optional field
    reason: '',            // Initial value for optional field
    type: '',              // Initial value for optional field
    division: '',          // Initial value for optional field
    category: '',          // Initial value for optional field
    priority: '',          // Initial value for optional field
    department: '',        // Initial value for optional field
    startDate: undefined,  // Initial value for optional field
    endDate: undefined,    // Initial value for optional field
    location: '',          // Initial value for optional field
    userId: ''             // Initial value for required field
};

export interface CreateProjectApiState {
    loading: boolean;
    data: CreateProject;
}

export const initialCreateProjectApiState: CreateProjectApiState = {
    loading: false,
    data: initialCreateProject  // Corrected from 'date' to 'data'
};
