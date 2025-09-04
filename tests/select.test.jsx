import React from 'react';
import { describe, it, expect } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithTheme } from './utils.jsx';
import { Select } from '../src/ui/index.js';

describe('Select', () => {
  it('changes selected option', () => {
    renderWithTheme(
      <Select data-testid="sel" defaultValue="Todos">
        <option>Todos</option>
        <option>Pendiente</option>
      </Select>
    );
    const el = screen.getByTestId('sel').querySelector('select');
    expect(el.value).toBe('Todos');
    fireEvent.change(el, { target: { value: 'Pendiente' } });
    expect(el.value).toBe('Pendiente');
  });
});

