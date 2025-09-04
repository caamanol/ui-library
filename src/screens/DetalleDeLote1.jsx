import React, { useMemo, useState } from 'react';
import ScreenScaffold from '../components/ScreenScaffold.jsx';
import Input from '../components/atoms/Input.jsx';
import Button from '../components/atoms/Button.jsx';
import Badge from '../components/atoms/Badge.jsx';
import DataTable from '../components/molecules/DataTable.jsx';

/**
 * Detalle de lote – Variante 1 (énfasis en pendientes)
 */
export default function DetalleDeLote1() {
  const [query, setQuery] = useState('');
  const data = useMemo(() => dataVar1, []);
  const filtered = useMemo(() => data.filter(r => (`${r.id} ${r.bank} ${r.holder} ${r.cuit}`).toLowerCase().includes(query.toLowerCase())), [data, query]);

  return (
    <ScreenScaffold width={1100}>
      <Header title="Lote #1012 – Variante 1" />
      <Toolbar query={query} setQuery={setQuery} />
      <DataTable
        columns={[
          { key: 'id', header: 'ID' },
          { key: 'amount', header: 'Monto', render: v => formatMoney(v) },
          { key: 'bank', header: 'Banco' },
          { key: 'cuit', header: 'CUIT' },
          { key: 'holder', header: 'Titular' },
          { key: 'date', header: 'Fecha' },
          { key: 'status', header: 'Estado', render: v => <Badge variant="warning">{v}</Badge> },
        ]}
        rows={filtered}
      />
    </ScreenScaffold>
  );
}

function Header({ title }) {
  return (
    <div className="header-bar header-bar--dark rounded-12 mb-12">
      <div className="text-xs opacity-90">Lotes / <strong>{title}</strong></div>
      <div className="toolbar mt-6">
        <Button variant="secondary">Exportar</Button>
        <Button variant="success">Agregar cheque</Button>
      </div>
    </div>
  );
}

function Toolbar({ query, setQuery }) {
  return (
    <div className="toolbar mb-12">
      <Input value={query} onChange={e => setQuery(e.target.value)} placeholder="Buscar…" className="flex-1" />
      <Badge variant="warning">Pendientes</Badge>
    </div>
  );
}
const formatMoney = (n) => new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(n);

const dataVar1 = [
  { id: 'CH-0101', amount: 150000, bank: 'Galicia',   cuit: '20-12345678-9', holder: 'Juan Pérez',     date: '2025-09-02', status: 'Pendiente' },
  { id: 'CH-0102', amount: 280000, bank: 'Nación',    cuit: '27-87654321-0', holder: 'Servicios SRL',  date: '2025-09-03', status: 'Pendiente' },
  { id: 'CH-0103', amount: 98000,  bank: 'Macro',     cuit: '23-22334455-6', holder: 'ACME S.A.',      date: '2025-09-03', status: 'Pendiente' },
  { id: 'CH-0104', amount: 430000, bank: 'BBVA',      cuit: '30-11223344-5', holder: 'Proveedor Norte',date: '2025-09-04', status: 'Pendiente' },
];
