import React from 'react';
import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithTheme } from './utils.jsx';
import { Sidebar, Card } from '../src/ui/index.js';

describe('Sidebar', () => {
  it('renders filter node and children', () => {
    renderWithTheme(
      <div style={{ height: 300 }}>
        <Sidebar filter={<div aria-label="filtro">Filtro</div>}>
          <Card>Item A</Card>
          <Card>Item B</Card>
        </Sidebar>
      </div>
    );
    expect(screen.getByLabelText('filtro')).toBeInTheDocument();
    expect(screen.getByText('Item A')).toBeInTheDocument();
    expect(screen.getByText('Item B')).toBeInTheDocument();
  });

  it('accepts a filter component function', () => {
    function MyFilter() {
      return <input placeholder="Buscar…" />;
    }
    renderWithTheme(
      <div style={{ height: 200 }}>
        <Sidebar filter={MyFilter}>
          <Card>Resultado</Card>
        </Sidebar>
      </div>
    );
    expect(screen.getByPlaceholderText('Buscar…')).toBeInTheDocument();
    expect(screen.getByText('Resultado')).toBeInTheDocument();
  });
});

