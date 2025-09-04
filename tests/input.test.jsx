import React from 'react';
import { describe, it, expect } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithTheme } from './utils.jsx';
import { Input } from '../src/ui/index.js';

describe('Input', () => {
  it('renders and accepts typing', () => {
    renderWithTheme(<Input placeholder="Buscar…" />);
    const input = screen.getByPlaceholderText('Buscar…');
    fireEvent.change(input, { target: { value: 'abc' } });
    expect(input).toHaveValue('abc');
  });
});

