import React from 'react';
import { describe, it, expect } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithTheme } from './utils.jsx';
import { SearchBar } from '../src/ui/index.js';

describe('SearchBar', () => {
  it('allows typing and shows value', () => {
    renderWithTheme(<SearchBar placeholder="Buscar…" />);
    const input = screen.getByPlaceholderText('Buscar…');
    fireEvent.change(input, { target: { value: 'abc' } });
    expect(input).toHaveValue('abc');
  });
});

