import { configureStore } from "@reduxjs/toolkit";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";


// ==================================== SLICES ====================================
import authSliceReducer from "../components/auth/authslice";
import snackbarslice from "../components/snackbar/snackbarslice";

const store = configureStore({
    reducer: {
        auth: authSliceReducer,
        snackbar: snackbarslice
    },
});

export type AppDispatch = typeof store.dispatch;
// Export a hook that can be reused to resolve types
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type RootState = ReturnType<typeof store.getState>;
export default store;