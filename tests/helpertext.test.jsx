import React from 'react';
import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithTheme } from './utils.jsx';
import { HelperText } from '../src/ui/index.js';

describe('HelperText', () => {
  it('renders default helper', () => {
    renderWithTheme(<HelperText>Ayuda</HelperText>);
    expect(screen.getByText('Ayuda')).toBeInTheDocument();
  });
  it('renders error style', () => {
    renderWithTheme(<HelperText variant="error">Error</HelperText>);
    expect(screen.getByText('Error')).toBeInTheDocument();
  });
});

