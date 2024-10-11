import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

const SearchField = (props: SearchInputProps) => {
    const handleChange = React.useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            props.setQuery(e.target.value);
        },
        [props.setQuery]
    );

    return (
        <TextField
            className='bg-white rounded-t-lg'
            size="small"
            value={props.value}
            onChange={handleChange}
            placeholder={props.placeholder}
            slotProps={{
                input: {
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                    sx: {
                        width: 'auto', // Allows the width to grow based on content
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: 'none',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                            border: 'none',
                        },
                    },
                }
            }}
        />
    );
};

export default SearchField;
