import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme } from '../src/theme.js';
import { render } from '@testing-library/react';

export function renderWithTheme(ui, options = {}) {
  return render(
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      {ui}
    </ThemeProvider>,
    options
  );
}

