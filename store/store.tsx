import { configureStore } from '@reduxjs/toolkit';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import rootReducer from './reducers';
import adoptedPetSlice from '@/features/adoptedPet/adoptedPetSlice';
import searchParamsAndResultsSlice from '@/features/search-params-and-results-slice';
import { petApi } from '@/service/pet-API-service';

export const store = configureStore({
    reducer: {
        adoptedPetSlice,
        searchParamsAndResultsSlice,
        [petApi.reducerPath]: petApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(petApi.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export const useAppSelector: TypedUseSelectorHook<RootState> =
    useSelector;
