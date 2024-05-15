import { createAsyncThunk } from '@reduxjs/toolkit';
import { MAX_ITEMS_PER_PAGE, PAGINATE_ERROR_1, PAGINATE_ERROR_2} from '../constant/constant';
import axiosInstance from './base.service';
import { Data } from '../interfaces/paginationStateData';

export const getPaginatedDataThunk = createAsyncThunk(
    'data/fetchPaginatedData', async (page: number) => {
        try {
            const response = await axiosInstance.get(`/paginatedUsers?page=${page}&limit=${MAX_ITEMS_PER_PAGE}`);
            const { pageCount, result } = response.data;
            if (pageCount && result) {
                const data: Data = {
                    pageCount: pageCount,
                    result: result,
                };
                return data;
            } else {
                throw new Error(PAGINATE_ERROR_1);
            }
        } catch (error) {
            console.error(PAGINATE_ERROR_2, error);
            throw error;
        }
    }
);
