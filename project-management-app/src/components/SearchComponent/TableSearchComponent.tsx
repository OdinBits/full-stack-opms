import React from 'react';
import { Grid, InputAdornment, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { ThemeProvider } from '@mui/material/styles';
import { globalTheme } from '../../themes/globalTheme';
import { SearchInputProps } from '../../interfaces/SearchParams';
import { searchStyles } from './tableSearchStyle';

const SearchInputComponent: React.FC<SearchInputProps> = ({
    value,
    setQuery,
    placeholder,
}) => {
    const handleChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    }, [setQuery]);
    return (
        <ThemeProvider theme={globalTheme}>
            <Grid sx={searchStyles.searchInputBaseContainer}>
                <InputAdornment position="start" sx={searchStyles.searchIcon}>
                    <SearchIcon sx={searchStyles.searchIconStyle} />
                </InputAdornment>
                <InputBase
                    type="text"
                    value={value}
                    onChange={handleChange}
                    placeholder={placeholder}
                    sx={searchStyles.searchInput}
                />
            </Grid>
        </ThemeProvider>
    );
};
export default SearchInputComponent;
