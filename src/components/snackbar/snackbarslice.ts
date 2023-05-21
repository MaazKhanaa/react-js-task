import { createSlice } from '@reduxjs/toolkit';

const snackbarSlice = createSlice({
    name: 'snackbar',
    initialState: {
        successMessage: '',
        errorMessage: '',
    },
    reducers: {
        setSuccessMessage: (state, action) => {
            state.successMessage = action.payload;
        },

        setErrorMessage: (state, action) => {
            state.errorMessage = action.payload;
        },
    },
});

export const { setSuccessMessage, setErrorMessage } = snackbarSlice.actions;
export default snackbarSlice.reducer;
