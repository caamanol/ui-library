import React from 'react';
import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithTheme } from './utils.jsx';
import { EmptyState } from '../src/ui/index.js';

describe('EmptyState', () => {
  it('renders title, description and actions', () => {
    renderWithTheme(
      <EmptyState
        title="No hay datos"
        description="Crea tu primer elemento"
        primary={{ children: 'Crear' }}
        secondary={{ children: 'Saber más' }}
      />
    );
    expect(screen.getByText('No hay datos')).toBeInTheDocument();
    expect(screen.getByText('Crea tu primer elemento')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /crear/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /saber más/i })).toBeInTheDocument();
  });
});

