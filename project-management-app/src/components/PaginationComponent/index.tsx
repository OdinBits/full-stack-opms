/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useDispatch } from 'react-redux';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { setPaginatedData } from '../../store/paginationSlice';
import { useAppSelector, AppDispatch } from '../../store';
import { getPaginatedDataThunk } from '../../api/getPaginationData.service';
import { paginateContainer } from './paginationStyles';
import { ThemeProvider } from '@mui/material';
import { theme } from './globalTheme';

const PaginatedComponent = () => {
    const dispatch: AppDispatch = useDispatch();
    const [pageCountNumber, setPageCountNumber] = React.useState(1);
    const [currentPage, setCurrentPage] = React.useState(1);
    const { result, pageCount } = useAppSelector(state => state.pagination)

    React.useEffect(() => {
        dispatch(getPaginatedDataThunk(currentPage));
        setPageCountNumber(pageCount);
        dispatch(setPaginatedData({ pageCount, currentPage, result }));
    }, []);

    const handlePageChange = async (event: React.ChangeEvent<unknown>, value: number) => {
        if (value === currentPage) {
            return;
        }
        setCurrentPage(value);
        dispatch(getPaginatedDataThunk(value));
        setPageCountNumber(pageCount);
        dispatch(setPaginatedData({ pageCount, currentPage: value, result }));
    };

    return (
        <ThemeProvider theme={theme}>
            <Stack direction="row" justifyContent="center" alignItems="center" >
                <Pagination
                    count={pageCountNumber}
                    page={currentPage}
                    onChange={handlePageChange}
                    sx={paginateContainer}
                    color="primary"
                />
            </Stack>
        </ThemeProvider>
    );
};
export default PaginatedComponent;
