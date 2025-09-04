import React, { useMemo, useState } from 'react';
import ScreenScaffold from '../components/ScreenScaffold.jsx';
import Button from '../components/atoms/Button.jsx';
import Input from '../components/atoms/Input.jsx';
import Select from '../components/atoms/Select.jsx';
import Badge from '../components/atoms/Badge.jsx';
import Card from '../components/atoms/Card.jsx';
import MetricCard from '../components/molecules/MetricCard.jsx';
import DataTable from '../components/molecules/DataTable.jsx';

/**
 * Detalle de lote – UI basada en mock (sin PNG).
 * - Encabezado con breadcrumbs y acciones.
 * - Resumen con métricas.
 * - Filtros y tabla de cheques.
 */
export default function DetalleDeLote() {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('Todos');

  const data = useMemo(() => sampleChecks, []);
  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return data.filter(row => {
      const matchesQ = `${row.id} ${row.bank} ${row.holder} ${row.cuit}`.toLowerCase().includes(q);
      const matchesS = status === 'Todos' || row.status === status;
      return matchesQ && matchesS;
    });
  }, [data, query, status]);

  const counts = useMemo(() => {
    const all = data.length;
    const by = (s) => data.filter(d => d.status === s).length;
    return { all, Pendiente: by('Pendiente'), 'En proceso': by('En proceso'), Aprobado: by('Aprobado'), Rechazado: by('Rechazado') };
  }, [data]);

  function exportCSV() {
    const header = ['ID','Monto','Banco','CUIT','Titular','Fecha','Estado'];
    const rows = filtered.map(r => [r.id, r.amount, r.bank, r.cuit, r.holder, r.date, r.status]);
    const csv = [header, ...rows].map(r => r.map(x => `"${String(x).replaceAll('"','""')}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'lote.csv'; a.click();
    URL.revokeObjectURL(url);
  }

  function addCheck() {
    alert('Agregar cheque (hookear a flujo real)');
  }

  return (
    <ScreenScaffold width={1200}>
      <Card padded={false}>
        <div className="header-bar header-bar--dark">
          <div className="text-xs opacity-85">Lotes / <span className="font-600">Lote #1012</span></div>
          <div className="header-row">
            <h1 className="header-title">Detalle de lote</h1>
            <div className="toolbar">
              <Button variant="secondary" onClick={exportCSV}>Exportar CSV</Button>
              <Button variant="success" onClick={addCheck}>Agregar cheque</Button>
            </div>
          </div>
        </div>

        <div className="section section--divider">
          <div className="metrics-grid">
          <MetricCard title="Total" value={counts.all} />
          <MetricCard title="Pendiente" value={counts['Pendiente']} />
          <MetricCard title="En proceso" value={counts['En proceso']} />
          <MetricCard title="Aprobado" value={counts['Aprobado']} />
          <MetricCard title="Rechazado" value={counts['Rechazado']} />
          </div>
        </div>

        <div className="section toolbar">
          <Input value={query} onChange={e => setQuery(e.target.value)} placeholder="Buscar por banco, titular, CUIT o ID" className="flex-1" />
          <Select value={status} onChange={e => setStatus(e.target.value)}>
            {['Todos','Pendiente','En proceso','Aprobado','Rechazado'].map(s => <option key={s} value={s}>{s}</option>)}
          </Select>
        </div>

        <div className="section">
          <DataTable
            columns={[
              { key: 'id', header: 'ID' },
              { key: 'amount', header: 'Monto', render: v => formatMoney(v) },
              { key: 'bank', header: 'Banco' },
              { key: 'cuit', header: 'CUIT' },
              { key: 'holder', header: 'Titular' },
              { key: 'date', header: 'Fecha' },
              { key: 'status', header: 'Estado', render: (v) => <StatusBadge status={v} /> },
            ]}
            rows={filtered}
          />
        </div>
      </Card>
    </ScreenScaffold>
  );
}

function StatusBadge({ status }) {
  const map = {
    'Pendiente': 'warning',
    'En proceso': 'info',
    'Aprobado': 'success',
    'Rechazado': 'danger',
  };
  const variant = map[status] || 'neutral';
  return <Badge variant={variant}>{status}</Badge>;
}

function formatMoney(n) {
  try { return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(n); }
  catch { return `$${n}`; }
}

const sampleChecks = [
  { id: 'CH-0001', amount: 150000, bank: 'Banco Nación', cuit: '20-12345678-9', holder: 'Juan Pérez', date: '2025-09-01', status: 'Pendiente' },
  { id: 'CH-0002', amount: 240000, bank: 'BBVA', cuit: '27-87654321-0', holder: 'ACME S.A.', date: '2025-09-02', status: 'En proceso' },
  { id: 'CH-0003', amount: 98000,  bank: 'Galicia', cuit: '23-22334455-6', holder: 'Servicios SRL', date: '2025-09-03', status: 'Aprobado' },
  { id: 'CH-0004', amount: 430000, bank: 'Santander', cuit: '30-11223344-5', holder: 'Proveedor Norte', date: '2025-09-03', status: 'Rechazado' },
  { id: 'CH-0005', amount: 120000, bank: 'ICBC', cuit: '20-99887766-5', holder: 'Estudio Legal', date: '2025-09-04', status: 'Pendiente' },
  { id: 'CH-0006', amount: 375000, bank: 'Macro', cuit: '27-33445566-7', holder: 'Constructora Sur', date: '2025-09-04', status: 'En proceso' },
  { id: 'CH-0007', amount: 52000,  bank: 'Ciudad', cuit: '23-55667788-9', holder: 'Comercial Oeste', date: '2025-09-05', status: 'Aprobado' },
  { id: 'CH-0008', amount: 665000, bank: 'Supervielle', cuit: '30-66778899-1', holder: 'Distribuidora SA', date: '2025-09-06', status: 'En proceso' },
];
