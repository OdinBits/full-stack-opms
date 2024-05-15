
import React, { useState } from 'react';
import { MenuItem, FormControl, Select, SelectChangeEvent, Typography, Stack, Box } from '@mui/material';
import { sortStyles } from './sortyStyles';
import { DesktopSortProps, sortOptionsData } from '../../interfaces/sortMenu';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const CustomArrowIcon = () => (
    <ArrowForwardIosIcon
        style={{ transform: 'rotate(90deg)' , width:'20px' }} 
    />
);

const SortSelectDesktopComponent: React.FC<DesktopSortProps> = ({ handleRequestSort }) => {
    const [sortValue, setSortValue] = useState<string>(sortOptionsData[0].value);

    const handleChange = (event: SelectChangeEvent<string>) => {
        const newSortValue = event.target.value;
        setSortValue(newSortValue);
        handleRequestSort(newSortValue);
    };

    return (
        <Stack direction='row'>
            <Box flex={1} >
                <Typography sx={sortStyles.sortDesktopText}>Sort By :</Typography>
            </Box>

            <Box flex={1} >
                <FormControl sx={{padding:'0px'}}>
                    <Select
                        labelId="sort-by-label"
                        id="sort-by-select"
                        value={sortValue}
                        onChange={handleChange}
                        label="Sort By"
                        IconComponent={CustomArrowIcon}
                        sx={sortStyles.sortDesktopSelect}
                    >
                        {sortOptionsData.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
            {/* <Typography sx={sortStyles.sortDesktopText}>Sort By :</Typography>
            <FormControl variant="outlined" size="small" margin="dense">
                <Select
                    labelId="sort-by-label"
                    id="sort-by-select"
                    value={sortValue}
                    onChange={handleChange}
                    label="Sort By"
                    sx={sortStyles.sortDesktopSelect}
                >
                    {sortOptionsData.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl> */}
        </Stack>
    );
};

export default SortSelectDesktopComponent;
