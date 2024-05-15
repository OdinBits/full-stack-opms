// SortIconComponentProps.ts
export interface SortIconComponentProps {
    isModalOpen: boolean;
    handleModalToggle: () => void;
    handleRequestSort: (columnName: string) => void;
}

export const sortOptionsData = [
    { label: 'Priority', value: 'priority' },
    { label: 'Division', value: 'division' },
    { label: 'Status', value: 'currentStatus' },
];

