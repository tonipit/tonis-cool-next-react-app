import { Animal } from '@/components/cat/cat-types';
import { createSlice } from '@reduxjs/toolkit';

export const searchParamsAndResultsSlice = createSlice({
    name: 'searchParamsAndResults',
    initialState: {
        catList: null,
        searchParams: {
            location: '',
            animal: 'cat' as Animal,
            breed: '',
        },
    },
    reducers: {
        setCatList: (state, action) => {
            state.catList = action.payload;
        },
        setSearchParams: (state, action) => {
            state.searchParams = action.payload;
        },
    },
});

export const { setCatList, setSearchParams } =
    searchParamsAndResultsSlice.actions;
export default searchParamsAndResultsSlice.reducer;
