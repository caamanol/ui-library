import React from 'react';
import { describe, it, expect } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithTheme } from './utils.jsx';
import { Textarea } from '../src/ui/index.js';

describe('Textarea', () => {
  it('accepts typing', () => {
    renderWithTheme(<Textarea placeholder="Comentario" />);
    const el = screen.getByPlaceholderText('Comentario');
    fireEvent.change(el, { target: { value: 'hola' } });
    expect(el).toHaveValue('hola');
  });
});

