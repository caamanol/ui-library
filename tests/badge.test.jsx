import React from 'react';
import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithTheme } from './utils.jsx';
import { Badge } from '../src/ui/index.js';

describe('Badge', () => {
  it('renders label', () => {
    renderWithTheme(<Badge>Neutral</Badge>);
    expect(screen.getByText('Neutral')).toBeInTheDocument();
  });
});

