import React from 'react';
import DataTable from './DataTable.jsx';
import Badge from '../atoms/Badge.jsx';

export default {
  title: 'Molecules/DataTable',
  component: DataTable,
};

const columns = [
  { key: 'id', header: 'ID' },
  { key: 'amount', header: 'Monto', render: (v) => new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(v) },
  { key: 'bank', header: 'Banco' },
  { key: 'cuit', header: 'CUIT' },
  { key: 'holder', header: 'Titular' },
  { key: 'date', header: 'Fecha' },
  { key: 'status', header: 'Estado', render: (v) => <Badge variant={{ 'Pendiente':'warning','En proceso':'info','Aprobado':'success','Rechazado':'danger' }[v] || 'neutral'}>{v}</Badge> },
];

const rows = [
  { id: 'CH-0001', amount: 150000, bank: 'Banco Nación', cuit: '20-12345678-9', holder: 'Juan Pérez', date: '2025-09-01', status: 'Pendiente' },
  { id: 'CH-0002', amount: 240000, bank: 'BBVA', cuit: '27-87654321-0', holder: 'ACME S.A.', date: '2025-09-02', status: 'En proceso' },
  { id: 'CH-0003', amount: 98000,  bank: 'Galicia', cuit: '23-22334455-6', holder: 'Servicios SRL', date: '2025-09-03', status: 'Aprobado' },
];

export const Basic = {
  args: {
    columns,
    rows,
  },
};

