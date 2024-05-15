import React, { useState } from 'react';
import { TableRow, TableCell, Button, Grid, Typography, ThemeProvider, Stack } from '@mui/material';
import { formatDateDisplay } from '../../utils/FormateDate';
import { globalTheme } from '../../themes/globalTheme';
import { TableRowComponentProps } from '../../interfaces/rowData';
import { tableRowStyles } from './tableRowStyles';

export const TableRowComponent: React.FC<TableRowComponentProps> = ({ countId, Update }) => {
    const [isClosed, setIsClosed] = useState(false);

    const handleUpdate = (status: string) => {
        Update(status, countId._id);
    };

    const handleClose = () => {
        setIsClosed(true);
        handleUpdate("Closed");
    };

    return (
        <ThemeProvider theme={globalTheme}>
            <TableRow key={countId._id} sx={tableRowStyles.rowStyle}>
                <TableCell id="pro-name" sx={tableRowStyles.cellStyle}>
                    <Grid container direction="column" alignItems="flex-start">
                        <Typography variant="h6" sx={tableRowStyles.defaultProjectName}>
                            {countId.projectInfo}
                        </Typography>
                        <Typography sx={tableRowStyles.dateOutputStyle}>
                            {`${formatDateDisplay(countId.startDate)} to ${formatDateDisplay(countId.endDate)}`}
                        </Typography>
                    </Grid>
                </TableCell>
                <TableCell>{countId.reason}</TableCell>
                <TableCell>{countId.type}</TableCell>
                <TableCell>{countId.division}</TableCell>
                <TableCell>{countId.category}</TableCell>
                <TableCell>{countId.priority}</TableCell>
                <TableCell>{countId.department}</TableCell>
                <TableCell>{countId.location}</TableCell>
                <TableCell sx={tableRowStyles.tableStatusData}>{countId.currentStatus}</TableCell>
                <TableCell >
                    <Stack direction='row' spacing={1.5} sx={{width:'160px'}}>
                        <Button
                            sx={{...tableRowStyles.startButtonStyle,background: countId.currentStatus === 'Running' ? 'blue' : 'white'}}
                            onClick={() => Update("Running", countId._id)}
                            disabled={countId.currentStatus === 'Closed' ? true : false}
                        >
                            Start
                        </Button>

                        <Button
                            sx={{...tableRowStyles.closeAndCancelButtonStyle,background: countId.currentStatus === 'Closed' ? 'blue' : 'white'}}
                            onClick={() => handleClose()}
                            disabled={countId.currentStatus === 'Closed' ? true : false}
                        >
                            Close
                        </Button>

                        <Button
                            sx={{...tableRowStyles.closeAndCancelButtonStyle,background: countId.currentStatus === 'Cancelled' ? 'blue' : 'white'}}
                            onClick={() => handleUpdate("Cancelled")}
                            disabled={countId.currentStatus === 'Closed' ? true : false}
                        >
                            Cancel
                        </Button>
                    </Stack>
                </TableCell>
            </TableRow>
        </ThemeProvider>
    );
};
