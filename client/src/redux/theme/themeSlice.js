import {createSlice} from '@reduxjs/toolkit';

// Detectar la preferencia del sistema para el tema oscuro
const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

const initialState = {
  theme: prefersDarkMode ? 'dark' : 'light', // Establecer el tema inicial basado en la preferencia del sistema
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
        },
        }
});

export const {toggleTheme} = themeSlice.actions;

export default themeSlice.reducer;