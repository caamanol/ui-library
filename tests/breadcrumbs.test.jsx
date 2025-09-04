import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithTheme } from './utils.jsx';
import { Breadcrumbs } from '../src/ui/index.js';

describe('Breadcrumbs', () => {
  it('renders items and links', () => {
    renderWithTheme(
      <Breadcrumbs items={[{ label: 'Lotes', href: '#' }, { label: 'Lote #1012' }]} />
    );
    expect(screen.getByText('Lotes').closest('a')).toBeTruthy();
    expect(screen.getByText('Lote #1012')).toBeInTheDocument();
  });
  it('calls onNavigate when clicking a link', () => {
    const onNavigate = vi.fn();
    renderWithTheme(
      <Breadcrumbs onNavigate={onNavigate} items={[{ label: 'Lotes', href: '#' }, { label: 'Lote #1012' }]} />
    );
    fireEvent.click(screen.getByText('Lotes'));
    expect(onNavigate).toHaveBeenCalled();
  });
});
