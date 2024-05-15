// EnhancedErrorPage.js
import React from 'react';
import { Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { feedBackStyle } from './feedBackStyle';

const NotFound = ( error : {errorMessage: string}) => {
    const [isDialogOpen, setIsDialogOpen] = React.useState(true);

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };

    return (
        <>
            <Dialog open={isDialogOpen} onClose={handleCloseDialog} maxWidth="md">
                <DialogTitle>Error 404</DialogTitle>
                <DialogContent>
                    <Typography variant="h5" color="textSecondary" paragraph>
                        {error.errorMessage || 'An error occurred.'}
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button component={Link} to="/" variant="contained" color="primary">
                        Go to Home
                    </Button>
                    <Button onClick={handleCloseDialog} variant="contained" color="secondary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
            <Grid sx={feedBackStyle.dialogStyles}></Grid>
        </>
    );
};

export default NotFound;
