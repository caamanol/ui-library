import React from 'react';
import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithTheme } from './utils.jsx';
import { Toolbar, Button } from '../src/ui/index.js';

describe('Toolbar', () => {
  it('renders children', () => {
    renderWithTheme(<Toolbar><Button>Acción</Button></Toolbar>);
    expect(screen.getByRole('button', { name: /acción/i })).toBeInTheDocument();
  });
});

