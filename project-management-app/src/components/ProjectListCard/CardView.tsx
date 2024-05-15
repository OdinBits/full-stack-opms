import React, { useState } from 'react';
import { Card, CardContent, CardActions, Typography, Button, Grid, Box } from '@mui/material';
import { tableRowStyles } from '../TableRows/tableRowStyles';
import { formatDateDisplay } from '../../utils/FormateDate';
import { ThemeProvider } from '@mui/material/styles';
import { globalTheme } from '../../themes/globalTheme';
import { cardStyles } from './cardStyle';
import { CardViewProps } from '../../interfaces/ProjectListCardProps';

const CardView: React.FC<CardViewProps> = ({ countId, Update }) => {
    const [isClosed, setIsClosed] = useState(false);

    const handleClose = (status: string, id: string) => {
        setIsClosed(true);
        Update(status,id);
    };

    return (
        <ThemeProvider theme={globalTheme}>
            <Card sx={cardStyles.cardMainContainer}>
                <CardContent>
                    <Grid sx={cardStyles.cardInnerGridContainer}>
                        <Grid>
                            <Typography sx={cardStyles.cardViewTitle}>
                                {countId.projectInfo}
                            </Typography>
                            <Typography sx={cardStyles.cardViewDates}>
                                {formatDateDisplay(countId.startDate)} to {formatDateDisplay(countId.endDate)}
                            </Typography>
                        </Grid>
                        <Typography sx={cardStyles.mobileViewCurrentStatus}>
                            {countId.currentStatus}
                        </Typography>
                    </Grid>
                    <br />
                    <Grid>
                        <Typography sx={cardStyles.cardValueTitles}>
                            Reason: <Box component="span" sx={cardStyles.cardTitleText}>{countId.reason}</Box>
                        </Typography>
                        <Grid sx={{ display: 'flex' }}>
                            <Typography sx={cardStyles.cardValueTitles}>
                                Type:  <Box component="span" sx={cardStyles.cardTypeText}>{countId.type}</Box>
                            </Typography>
                            <Typography sx={cardStyles.cardValueTitles}>
                                <Box component="span" sx={cardStyles.cardTypeText2}> &nbsp; | &nbsp; </Box>Category: <Box component="span" sx={cardStyles.cardTypeText}> {countId.category}</Box>
                            </Typography>
                        </Grid>
                        <Grid sx={{ display: 'flex' }}>
                            <Typography sx={cardStyles.cardValueTitles}>
                                Div:  <Box component="span" sx={cardStyles.cardTypeText}>{countId.division}</Box>
                            </Typography>
                            <Typography sx={cardStyles.cardValueTitles}>
                                <Box component="span" sx={cardStyles.cardTypeText2}>&nbsp; | &nbsp;</Box>Dept: <Box component="span" sx={cardStyles.cardTypeText}>{countId.department}</Box>
                            </Typography>
                        </Grid>
                        <Typography sx={cardStyles.cardValueTitles}>
                            Location:  <Box component="span" sx={cardStyles.cardTypeText}>{countId.location}</Box>
                        </Typography>
                        <Typography sx={cardStyles.cardValueTitles}>
                            Priority: <Box component="span" sx={cardStyles.cardTypeText}>{countId.priority}</Box>
                        </Typography>
                    </Grid>
                </CardContent>
                <CardActions sx={cardStyles.buttonCardContainer}>
                    <Button
                        sx={tableRowStyles.startButtonStyle}
                        onClick={() => Update("Running", countId._id)}
                        disabled={isClosed}
                    >
                        Start
                    </Button>
                    <Button
                        sx={tableRowStyles.closeAndCancelButtonStyle}
                        onClick={() => handleClose("Closed", countId._id)}
                        disabled={isClosed}
                    >
                        Close
                    </Button>
                    <Button
                        sx={tableRowStyles.closeAndCancelButtonStyle}
                        onClick={() => Update("Cancelled", countId._id)}
                        disabled={isClosed}
                    >
                        Cancel
                    </Button>
                </CardActions>
            </Card>
        </ThemeProvider>
    );
};

export default CardView;
