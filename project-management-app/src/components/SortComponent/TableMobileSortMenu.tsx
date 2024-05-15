import React from 'react';
import IconButton from '@mui/material/IconButton';
import SortIcon from '@mui/icons-material/Sort';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import CancelIcon from '@mui/icons-material/Cancel';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { sortOptionsData } from '../../interfaces/sortMenu';
import { SortIconComponentProps } from '../../interfaces/SortIconProps';
import { sortStyles } from './sortyStyles';

const SortIconComponent: React.FC<SortIconComponentProps> = ({
    isModalOpen,
    handleModalToggle,
    handleRequestSort,
}) => (
    <>
        <IconButton onClick={handleModalToggle} color="primary">
            <SortIcon />
        </IconButton>
        <Modal open={isModalOpen} onClose={handleModalToggle}>
            <Box sx={sortStyles.sortIconButton}>
                <IconButton onClick={handleModalToggle} sx={sortStyles.sortIconCloseStyle}>
                    <Typography sx={sortStyles.sortViewMessage}>Sort Projects By</Typography>
                    <CancelIcon />
                </IconButton>
                <Grid sx={sortStyles.sortOptions}>
                    {sortOptionsData.map((option) => (
                        <Grid key={option.value}>
                            <Button
                                sx={{ color: 'gray', cursor: 'pointer', border: 'none', background: 'none' }}
                                onClick={() => handleRequestSort(option.value)}
                            >
                                {option.label}
                            </Button>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Modal>
    </>
);
export default SortIconComponent;
