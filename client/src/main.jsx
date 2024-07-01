import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store, persistor } from './redux/store.js';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from './components/ThemeProvider.jsx';

// Función para establecer el tema basado en la preferencia del sistema si no está ya definido
// const setThemeBasedOnSystemPreference = () => {
//   const currentTheme = store.getState().theme.theme;
//   const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
//   if (!currentTheme) {
//     if (systemPrefersDark) {
//       store.dispatch(toggleTheme());
//     }
//   }
// };

ReactDOM.createRoot(document.getElementById('root')).render(
  <PersistGate persistor={persistor} >
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </PersistGate>
);
