import React, { useMemo, useState } from 'react';
import ScreenScaffold from '../components/ScreenScaffold.jsx';
import TopBar from '../components/molecules/TopBar.jsx';
import Input from '../components/atoms/Input.jsx';
import Button from '../components/atoms/Button.jsx';
import Card from '../components/atoms/Card.jsx';
import EmptyState from '../components/molecules/EmptyState.jsx';

/**
 * Home Chequemate – estado vacío (sin PNG).
 * - Toolbar superior con marca y usuario.
 * - Búsqueda y botón de acción.
 * - Tarjeta de estado vacío con CTA.
 */
export default function HomeChequemateEmtyState() {
  const [query, setQuery] = useState('');

  const onCreate = () => alert('Crear primer lote');

  const results = useMemo(() => [], [query]);

  return (
    <ScreenScaffold width={1024}>
      <Card padded={false}>
        <TopBar brand="Chequemate" brandColorClass="bg-green" userEmail="lucas@opendev.tools" />
        <div className="section">
          <div className="flex items-center justify-between gap-12">
            <div>
              <h1 className="header-title">Lotes</h1>
              <p className="mt-4 text-muted">Gestioná tus lotes de cheques</p>
            </div>
            <div className="flex gap-8">
              <Button onClick={onCreate}>Nuevo lote</Button>
            </div>
          </div>

          <div className="toolbar mt-16">
            <Input value={query} onChange={e => setQuery(e.target.value)} placeholder="Buscar por nombre o ID de lote" className="flex-1" />
          </div>

          <div className="mt-16 place-center">
            <div className="w-full max-w-640">
              <EmptyState
                title="No hay lotes todavía"
                description="Creá tu primer lote para empezar a gestionar cheques."
                primary={{ children: 'Crear primer lote', onClick: onCreate }}
              />
            </div>
          </div>
        </div>
      </Card>
    </ScreenScaffold>
  );
}
