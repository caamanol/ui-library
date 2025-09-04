import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme } from './theme.js';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <ThemeProvider theme={lightTheme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
