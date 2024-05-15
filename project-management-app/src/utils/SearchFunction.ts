import { useMemo } from 'react'; 
import { Project } from "../interfaces/ResponseData";
import { SearchParams } from "../interfaces/SearchParams";
import { formatDate } from "./FormateDate";


export const useSearchPg = ({ e, sortColumn, sortOrder, query }: SearchParams) => {
    const sortedAndFilteredData = useMemo(() => {
        const sortedData = [...Object.values(e)];

        if (sortColumn) {
            if (sortColumn === 'recentlyAdded') {
                sortedData.sort((a: Project, b: Project) => {
                    const aTimestamp = new Date(a.startDate).getTime();
                    const bTimestamp = new Date(b.startDate).getTime();
                    return sortOrder === 'asc' ? aTimestamp - bTimestamp : bTimestamp - aTimestamp;
                });
            } else {
                sortedData.sort((a: any, b: any) => {
                    const aValue = a[sortColumn].toLowerCase();
                    const bValue = b[sortColumn].toLowerCase();
                    return sortOrder === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
                });
            }
        }

        const lowerCaseQuery = query.toLowerCase();
        return sortedData.filter((item: Project) => {
            const fieldsToCheck = [
                item.projectInfo,
                item.reason,
                item.type,
                item.division,
                item.category,
                item.priority,
                item.department,
                item.location,
                item.currentStatus,
                formatDate(item.startDate),
                formatDate(item.endDate),
            ];

            return fieldsToCheck.map(field => {
                const fieldValue = field?.toString()?.toLowerCase(); 
                return fieldValue?.includes(lowerCaseQuery); 
            }).some(isTrue => isTrue);
        });
    }, [e, sortColumn, sortOrder, query]); 

    return sortedAndFilteredData;
};
