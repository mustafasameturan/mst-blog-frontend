import { createSlice } from "@reduxjs/toolkit";
import {getCookie, removeCookie, setCookie} from "ko-basic-cookie";

const initialState = {
    token: getCookie('token') || false
}

const adminLogin = createSlice({
    name: 'adminLogin',
    initialState,
    reducers: {
        _adminLogin: (state, action) => {
            state.token = action.payload;
            setCookie('token', action.payload, 30);
        },
        _adminLogout: (state, action) => {
            state.token = '';
            removeCookie('token');
        }
    }
})

export const { _adminLogin, _adminLogout } = adminLogin.actions;
export default adminLogin.reducer;