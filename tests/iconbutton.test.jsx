import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithTheme } from './utils.jsx';
import { IconButton } from '../src/ui/index.js';

describe('IconButton', () => {
  it('fires onClick', () => {
    const onClick = vi.fn();
    renderWithTheme(<IconButton aria-label="star" onClick={onClick}>★</IconButton>);
    fireEvent.click(screen.getByLabelText('star'));
    expect(onClick).toHaveBeenCalled();
  });
});

