import React from 'react';
import { TableHead, TableRow, TableCell, TableSortLabel, ThemeProvider } from '@mui/material';
import { globalTheme } from '../../themes/globalTheme';
import { tableHeadCell } from './tableHeadStyles';
import { CustomTableHeadProps, columns } from '../../interfaces/TableColumnConfig';


    const CustomTableHead: React.FC<CustomTableHeadProps> = ({ handleRequestSort }) => (
    <ThemeProvider theme={globalTheme}>
        <TableHead>
        <TableRow >
            {columns.map((column) => (
                <TableCell
                    key={column.id}
                    scope="col"
                    sx={tableHeadCell}
                >
                    {column.sortable ? (
                        <TableSortLabel onClick={() => handleRequestSort(column.id)}>
                            {column.label}
                        </TableSortLabel>
                    ) : (
                        column.label
                    )}
                </TableCell>
            ))}
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
        </TableRow>
    </TableHead>
    </ThemeProvider>
);
export default CustomTableHead;
