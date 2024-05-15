export interface DesktopSortProps {
    handleRequestSort: (columnName: string) => void;
}

export const sortOptionsData = [
    { label: 'Priority', value: 'priority' },
    { label: 'Reason', value: 'reason' },
    { label: 'Type', value: 'type' },
    { label: 'Division', value: 'division' },
    { label: 'Category', value: 'category' },
    { label: 'Status', value: 'currentStatus' },
    { label: 'Location', value: 'location' },
    { label: 'Department', value: 'department' },
];