import { createSlice } from "@reduxjs/toolkit";


// ================ Interfaces ================
import { IAUTHSTATE, IAUTHUSERDATA } from "../../types/slicesTypes/authSliceTypes";


// ================ Auth Slice Initial State ================
const initialState: IAUTHSTATE = {
    isLoggedIn: false,
    userData: null,
    users: [] || null,
    isLoading: false,
    error: "",
}


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // ================ Signup Reducer ================
        setSignup: (state, action) => {

            const checkUser = state.users.find((singleUser: IAUTHUSERDATA) => singleUser.email === action.payload?.email)
            if (!checkUser) {
                state.error = ""
                state.users.push(action.payload);
            }
            else {
                state.error = "User already exists with the given email!"
            }
        },

        // ================ Login Reducer ================
        setLogin: (state, action) => {

            const checkUser = state.users.find((singleUser: IAUTHUSERDATA) => singleUser.email === action.payload?.email)

            if (checkUser) {
                state.isLoggedIn = true;
                state.userData = checkUser;
                state.isLoading = false;
                state.error = ""
            }
            else {
                state.error = "User not found!"
            }
        },

        // ================ Logout Reducer ================
        setLogout: (state) => {
            state.isLoggedIn = false;
            state.userData = null;
        }
    }
})

export const { setSignup, setLogin, setLogout } = authSlice.actions;
export default authSlice.reducer;