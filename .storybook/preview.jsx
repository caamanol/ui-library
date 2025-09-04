import React from 'react';
import '../src/styles.css';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from '../src/theme.js';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: '#ffffff' },
      { name: 'dark', value: '#0b1220' },
    ],
  },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Tema de UI',
    defaultValue: 'light',
    toolbar: {
      icon: 'mirror',
      items: [
        { value: 'light', title: 'Light' },
        { value: 'dark', title: 'Dark' },
      ],
      showName: true,
    },
  },
};

export const decorators = [
  (Story, context) => {
    const theme = context.globals.theme === 'dark' ? darkTheme : lightTheme;
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="sb-container" style={{ padding: 16 }}>
          <Story />
        </div>
      </ThemeProvider>
    );
  },
];
