import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithTheme } from './utils.jsx';
import { Pagination } from '../src/ui/index.js';

describe('Pagination', () => {
  it('calls onChange when clicking a page', () => {
    const onChange = vi.fn();
    renderWithTheme(<Pagination current={2} totalPages={5} onChange={onChange} />);
    fireEvent.click(screen.getByRole('button', { name: 'Go to page 3' }));
    expect(onChange).toHaveBeenCalledWith(3);
  });
});

