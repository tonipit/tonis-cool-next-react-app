import { createSlice } from '@reduxjs/toolkit';

export const adoptedPetSlice = createSlice({
    name: 'adoptedPet',
    initialState: {
        adoptedCat: null,
    },
    reducers: {
        adopt: (state, action) => {
            state.adoptedCat = action.payload;
        },
        unAdopt: (state) => {
            state.adoptedCat = null;
        },
    },
});

export const { adopt, unAdopt } = adoptedPetSlice.actions;
export default adoptedPetSlice.reducer;
