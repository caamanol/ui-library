import React from 'react';
import { describe, it, expect } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithTheme } from './utils.jsx';
import { Radio } from '../src/ui/index.js';

describe('Radio', () => {
  it('selects radio on click', () => {
    renderWithTheme(<Radio name="g" label="Opción A" />);
    const input = screen.getByRole('radio', { name: /opción a/i });
    expect(input).not.toBeChecked();
    fireEvent.click(input);
    expect(input).toBeChecked();
  });
});
