import CssBaseline from '@mui/material/CssBaseline';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import theme from './theme.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Dùng Css CssVarsProvider thay cho ThemeProvider: Tránh trang bị nhấp nháy khi dùng Server side rendering*/}
    <CssVarsProvider theme={theme}> 
    <CssBaseline />
    <App />
    </CssVarsProvider>
  </React.StrictMode>,
)
