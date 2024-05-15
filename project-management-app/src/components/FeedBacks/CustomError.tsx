// ErrorComponent.js
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { feedBackStyle } from './feedBackStyle';
import { ErrorProps } from '../../interfaces/errorProp';


const FeedBackWindow: React.FC<ErrorProps> = ({ message }) => (
    <Box sx={feedBackStyle.conatiner}>
        <ErrorOutlineIcon sx={feedBackStyle.outlineIcon} />
        <Typography variant="body1" sx={feedBackStyle.textLayout}>
            {message}
        </Typography>
    </Box>
);

export default FeedBackWindow;

