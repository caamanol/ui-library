import React from 'react';
import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithTheme } from './utils.jsx';
import { Card } from '../src/ui/index.js';

describe('Card', () => {
  it('renders children', () => {
    renderWithTheme(<Card>Inside</Card>);
    expect(screen.getByText('Inside')).toBeInTheDocument();
  });
});

