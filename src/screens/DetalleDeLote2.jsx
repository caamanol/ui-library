import React, { useMemo, useState } from 'react';
import ScreenScaffold from '../components/ScreenScaffold.jsx';
import Input from '../components/atoms/Input.jsx';
import Select from '../components/atoms/Select.jsx';
import Badge from '../components/atoms/Badge.jsx';
import DataTable from '../components/molecules/DataTable.jsx';

/**
 * Detalle de lote – Variante 2 (aprobados/en proceso)
 */
export default function DetalleDeLote2() {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('Aprobado');
  const data = useMemo(() => dataVar2, []);
  const filtered = useMemo(() => data.filter(r => (`${r.id} ${r.bank} ${r.holder} ${r.cuit}`).toLowerCase().includes(query.toLowerCase()) && (status === 'Todos' || r.status === status)), [data, query, status]);

  return (
    <ScreenScaffold width={1100}>
      <div className="header-bar header-bar--dark rounded-12 mb-12">
        <div className="text-xs opacity-90">Lotes / <strong>Lote #1012 – Variante 2</strong></div>
      </div>
      <div className="toolbar mb-12">
        <Input value={query} onChange={e => setQuery(e.target.value)} placeholder="Buscar…" className="flex-1" />
        <Select value={status} onChange={e => setStatus(e.target.value)}>
          {['Todos','Aprobado','En proceso'].map(s => <option key={s} value={s}>{s}</option>)}
        </Select>
      </div>
      <DataTable
        columns={[
          { key: 'id', header: 'ID' },
          { key: 'amount', header: 'Monto', render: (v) => formatMoney(v) },
          { key: 'bank', header: 'Banco' },
          { key: 'cuit', header: 'CUIT' },
          { key: 'holder', header: 'Titular' },
          { key: 'date', header: 'Fecha' },
          { key: 'status', header: 'Estado', render: (v) => <StatusBadge s={v} /> },
        ]}
        rows={filtered}
      />
    </ScreenScaffold>
  );
}

function StatusBadge({ s }) {
  const map = { 'Aprobado': 'success', 'En proceso': 'info' };
  const variant = map[s] || 'neutral';
  return <Badge variant={variant}>{s}</Badge>;
}

const cell = { padding: '10px 12px', borderBottom: '1px solid #f3f4f6', color: '#111827' };
const formatMoney = (n) => new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(n);

const dataVar2 = [
  { id: 'CH-0201', amount: 150000, bank: 'Galicia',   cuit: '20-12345678-9', holder: 'Juan Pérez',     date: '2025-09-02', status: 'Aprobado' },
  { id: 'CH-0202', amount: 280000, bank: 'Nación',    cuit: '27-87654321-0', holder: 'Servicios SRL',  date: '2025-09-03', status: 'En proceso' },
  { id: 'CH-0203', amount: 98000,  bank: 'Macro',     cuit: '23-22334455-6', holder: 'ACME S.A.',      date: '2025-09-03', status: 'Aprobado' },
  { id: 'CH-0204', amount: 430000, bank: 'BBVA',      cuit: '30-11223344-5', holder: 'Proveedor Norte',date: '2025-09-04', status: 'En proceso' },
];
