export interface ProjectFields {
    projectTheme: string;
    reason: string;
    type: string;
    division: string;
    category: string;
    priority: string;
    department: string;
    startDate: Date | null;
    endDate: Date | null;
    location: string;
}

export const initialProjectState: ProjectFields = {
    projectTheme: "",
    reason: "",
    type: "",
    division: "",
    category: "",
    priority: "",
    department: "",
    startDate: null,
    endDate: null,
    location: "",
};

export const formFields = [
    {
        id: '1', // Change to a string
        label: 'Reason',
        name: 'reason',
        type: 'select', // Change type to select if you plan to add options
        options: ['For Business', 'For Personal Use'], // Example options
        placeholder: 'Select a reason',
    },
    {
        id: '2', // Change to a string
        label: 'Type',
        name: 'type',
        type: 'select',
        options: ['Internal', 'External'],
        placeholder: 'Select type',
    },
    {
        id: '3', // Change to a string
        label: 'Division',
        name: 'division',
        type: 'select',
        options: ['Filters', 'Development', 'Marketing'],
        placeholder: 'Select division',
    },
    {
        id: '4', // Change to a string
        label: 'Category',
        name: 'category',
        type: 'select',
        options: ['Quality A', 'Quality B'],
        placeholder: 'Select category',
    },
    {
        id: '5', // Change to a string
        label: 'Priority',
        name: 'priority',
        type: 'select',
        options: ['High', 'Medium', 'Low'],
        placeholder: 'Select priority',
    },
    {
        id: '6', // Change to a string
        label: 'Department',
        name: 'department',
        type: 'select',
        options: ['Strategy', 'Operations', 'HR'],
        placeholder: 'Select department',
    },
    {
        id: '7', // Change to a string
        label: 'Start Date of the Project',
        name: 'startDate',
        type: 'date',
        placeholder: 'D month,Yr',
    },
    {
        id: '8', // Change to a string
        label: 'End Date of the Project',
        name: 'endDate',
        type: 'date',
        placeholder: 'D month,Yr',
    },
    {
        id: '9', // Change to a string
        label: 'Location',
        name: 'location',
        type: 'string',
        placeholder: 'Pune',
    },
];

