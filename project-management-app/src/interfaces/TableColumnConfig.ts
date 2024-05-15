// TableConfig.ts
export const columns = [
    { id: 'projectInfo', label: 'Project Name', sortable: true },
    { id: 'reason', label: 'Reason', sortable: true },
    { id: 'type', label: 'Type', sortable: true },
    { id: 'division', label: 'Division', sortable: true },
    { id: 'category', label: 'Category', sortable: true },
    { id: 'priority', label: 'Priority', sortable: true },
    { id: 'department', label: 'Department', sortable: true },
    { id: 'location', label: 'Location', sortable: true },
    { id: 'currentStatus', label: 'Status', sortable: true },
];

export interface CustomTableHeadProps {
    handleRequestSort: (columnName: string) => void;
}
