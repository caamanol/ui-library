import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithTheme } from './utils.jsx';
import { DataTable, Badge } from '../src/ui/index.js';

const columns = [
  { key: 'id', header: 'ID' },
  { key: 'status', header: 'Estado', render: (v) => <Badge>{v}</Badge> },
];

describe('DataTable', () => {
  it('renders headers and rows', () => {
    const rows = [ { id: 'CH-0001', status: 'Pendiente' } ];
    renderWithTheme(<DataTable columns={columns} rows={rows} />);
    expect(screen.getByText('ID')).toBeInTheDocument();
    expect(screen.getByText('Estado')).toBeInTheDocument();
    expect(screen.getByText('CH-0001')).toBeInTheDocument();
    expect(screen.getByText('Pendiente')).toBeInTheDocument();
  });

  it('renders empty state', () => {
    renderWithTheme(<DataTable columns={columns} rows={[]} emptyText="No hay resultados" />);
    expect(screen.getByText('No hay resultados')).toBeInTheDocument();
  });
  it('calls onRowClick with row data', () => {
    const rows = [ { id: 'CH-0002', status: 'Aprobado' } ];
    const onRowClick = vi.fn();
    renderWithTheme(<DataTable columns={columns} rows={rows} onRowClick={onRowClick} />);
    fireEvent.click(screen.getByText('CH-0002'));
    expect(onRowClick).toHaveBeenCalledWith(rows[0]);
  });
});
