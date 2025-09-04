import React from 'react';
import { describe, it, expect } from 'vitest';
import { renderWithTheme } from './utils.jsx';
import { Spinner } from '../src/ui/index.js';

describe('Spinner', () => {
  it('renders progressbar', () => {
    const { getByRole } = renderWithTheme(<Spinner />);
    expect(getByRole('progressbar')).toBeTruthy();
  });
});

