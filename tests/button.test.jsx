import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithTheme } from './utils.jsx';
import { Button } from '../src/ui/index.js';

describe('Button', () => {
  it('renders text', () => {
    renderWithTheme(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('handles clicks', () => {
    const onClick = vi.fn();
    renderWithTheme(<Button onClick={onClick}>Hit</Button>);
    fireEvent.click(screen.getByRole('button', { name: /hit/i }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('respects disabled', () => {
    const onClick = vi.fn();
    renderWithTheme(<Button disabled>Disabled</Button>);
    fireEvent.click(screen.getByRole('button', { name: /disabled/i }));
    expect(onClick).not.toHaveBeenCalled();
  });
});

