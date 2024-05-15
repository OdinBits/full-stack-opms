import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { dashboardStyles } from '../../containers/Dashboard/dashboardStyles';
import { CardDetails } from '../../interfaces/cardDetails';


const DashCard: React.FC<CardDetails> = ({ title, value }) =>  (
    <Grid item sx={dashboardStyles.cardOutliner}>
        <Grid sx={dashboardStyles.innerCardStyle}>
            <Typography sx={dashboardStyles.cardTitle}>{title}</Typography>
            <Typography sx={dashboardStyles.cardResult}>{value ?? 'No Data'}</Typography>
        </Grid>
    </Grid>
);

export default DashCard;