const reasonOptions = [
    { value: 'Reason1', label: 'Reason 1' },
    { value: 'Reason2', label: 'Reason 2' },
];

const typeOptions = [
    { value: 'Type1', label: 'Type 1' },
    { value: 'Type2', label: 'Type 2' },
];

const divisionOptions = [
    { value: 'Division1', label: 'Division 1' },
    { value: 'Division2', label: 'Division 2' },
];

const categoriesOptions = [
    { value: 'Category1', label: 'Category 1' },
    { value: 'Category2', label: 'Category 2' },
];

const priorityOptions = [
    { value: 'High', label: 'High' },
    { value: 'Medium', label: 'Medium' },
    { value: 'Low', label: 'Low' },
];

const departmentOptions = [
    { value: 'Strategy', label: 'Strategy' },
    { value: 'Finance', label: 'Finance' },
    { value: 'Quality', label: 'Quality' },
    { value: 'Maintenance', label: 'Maintenance' },
    { value: 'Store', label: 'Store' },
    { value: 'Hr', label: 'Hr' },
    { value: 'Student', label:'Student' },
    {value: 'Teacher', label:'Teacher'},
    {value:'Principle', label:'Principle'}
];

const locationOptions = [
    { value: 'Hydrabad', label: 'Hydrabad' },
    { value: 'Mumbai', label: 'Mumbai' },
    { value: 'Chennai', label: 'Chennai' },
    { value: 'Gujarat', label: 'Gujarat' },
];

export const formFields = [
    { label: 'Reason', name: 'reason', options: reasonOptions, placeHolder: 'For Business' , type: 'string'},
    { label: 'Type', name: 'type', options: typeOptions, placeHolder: 'Internal', type: 'string'},
    { label: 'Division', name: 'division', options: divisionOptions, placeHolder: 'Filters', type: 'string'},
    { label: 'Category', name: 'category', options: categoriesOptions, placeHolder: 'Quality A' , type: 'string'},
    { label: 'Priority', name: 'priority', options: priorityOptions, placeHolder: 'High', type: 'string'},
    { label: 'Department', name: 'department', options: departmentOptions, placeHolder: 'Strategy', type: 'string'},
    { label: 'Start Date of the Project', name: 'startDate', type: 'date', placeHolder: 'D month,Yr'},
    { label: 'End Date of the Project', name: 'endDate', type: 'date', placeHolder: 'D month,Yr'},
    { label: 'Location', name: 'location', options: locationOptions, placeHolder: 'Pune', type: 'string'},
];