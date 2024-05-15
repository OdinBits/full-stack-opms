
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { feedBackStyle } from './feedBackStyle';

const LoadingComponent = ({ message = 'Loading...' }) => (
    <Box sx={feedBackStyle.loadingBoxContainer}>
        <CircularProgress />
        <Typography variant="body1" sx={feedBackStyle.loadingBoxText}>
            {message}
        </Typography>
    </Box>
);

export default LoadingComponent;
