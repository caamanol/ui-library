import React from 'react';
import { describe, it, expect } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithTheme } from './utils.jsx';
import { Switch } from '../src/ui/index.js';

describe('Switch', () => {
  it('toggles on change', () => {
    renderWithTheme(<Switch label="On" />);
    const input = screen.getByLabelText(/on/i);
    expect(input).not.toBeChecked();
    fireEvent.click(input);
    expect(input).toBeChecked();
  });
});
