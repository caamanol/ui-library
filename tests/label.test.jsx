import React from 'react';
import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithTheme } from './utils.jsx';
import { Label } from '../src/ui/index.js';

describe('Label', () => {
  it('renders text', () => {
    renderWithTheme(<Label htmlFor="email">Email</Label>);
    expect(screen.getByText('Email')).toBeInTheDocument();
  });
});

