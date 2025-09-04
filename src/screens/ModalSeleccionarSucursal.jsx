import React, { useMemo, useState } from 'react';
import ScreenScaffold from '../components/ScreenScaffold.jsx';
import Card from '../components/atoms/Card.jsx';
import Input from '../components/atoms/Input.jsx';
import Button from '../components/atoms/Button.jsx';

/**
 * Selección de sucursal (modal) – versión interactiva
 * Props opcionales:
 * - branches: Array<{ id, name, address }>
 * - onConfirm(id), onCancel()
 */
export default function ModalSeleccionarSucursal({ branches = defaultBranches, onConfirm, onCancel }) {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(branches[0]?.id ?? null);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return branches.filter(b => `${b.name} ${b.address}`.toLowerCase().includes(q));
  }, [branches, query]);

  function confirm() {
    if (selected == null) return;
    onConfirm ? onConfirm(selected) : alert(`Sucursal seleccionada: ${selected}`);
  }

  return (
    <ScreenScaffold width={560} debug={false}>
      <div className="modal-overlay" />
      <Card role="dialog" aria-modal="true" aria-labelledby="title" className="modal">
        <div className="modal-header">
          <h2 id="title" className="modal-title">Seleccionar sucursal</h2>
          <button onClick={onCancel} aria-label="Cerrar" className="icon-button text-20">×</button>
        </div>

        <Input value={query} onChange={e => setQuery(e.target.value)} placeholder="Buscar por nombre o dirección" />

        <div className="scroll-area">
          {filtered.length === 0 && (
            <div className="list-empty">No se encontraron sucursales.</div>
          )}
          {filtered.map(b => (
            <label key={b.id} className="list-item">
              <input type="radio" name="branch" checked={selected === b.id} onChange={() => setSelected(b.id)} />
              <div>
                <div className="font-600">{b.name}</div>
                <div className="text-muted text-xs">{b.address}</div>
              </div>
            </label>
          ))}
        </div>

        <div className="actions">
          <Button variant="secondary" onClick={onCancel}>Cancelar</Button>
          <Button onClick={confirm} disabled={selected == null}>Confirmar</Button>
        </div>
      </Card>
    </ScreenScaffold>
  );
}

const defaultBranches = [
  { id: 's1', name: 'Sucursal Centro', address: 'Av. Siempre Viva 123' },
  { id: 's2', name: 'Sucursal Norte', address: 'San Martín 456' },
  { id: 's3', name: 'Sucursal Sur', address: 'Belgrano 789' },
];
