import React from 'react';
import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithTheme } from './utils.jsx';
import { Toast } from '../src/ui/index.js';

describe('Toast', () => {
  it('renders alert', () => {
    renderWithTheme(<Toast>Ocurrió un error</Toast>);
    expect(screen.getByText('Ocurrió un error')).toBeInTheDocument();
  });
});

