import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: localStorage.getItem('theme') || 'default',
    language: localStorage.getItem('i18nextLng') || 'tr'
}

const app = createSlice({
    name: 'app',
    initialState,
    reducers: {
        _setTheme: (state, action) => {
            state.theme = action.payload;
            localStorage.setItem('theme', action.payload);
        },
        _setLanguage: (state, action) => {
            state.language = action.payload
        }
    }
})

export const { _setTheme, _setLanguage } = app.actions;
export default app.reducer;