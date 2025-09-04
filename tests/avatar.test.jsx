import React from 'react';
import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithTheme } from './utils.jsx';
import { Avatar } from '../src/ui/index.js';

describe('Avatar', () => {
  it('renders first letter of label', () => {
    renderWithTheme(<Avatar label="lucas@opendev.tools" />);
    expect(screen.getByText('L')).toBeInTheDocument();
  });
});

