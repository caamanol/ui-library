import React from 'react';
import { describe, it, expect } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithTheme } from './utils.jsx';
import { Checkbox } from '../src/ui/index.js';

describe('Checkbox', () => {
  it('toggles checked on click', () => {
    renderWithTheme(<Checkbox label="Acepto" />);
    const input = screen.getByRole('checkbox', { name: /acepto/i });
    expect(input).not.toBeChecked();
    fireEvent.click(input);
    expect(input).toBeChecked();
  });
});
