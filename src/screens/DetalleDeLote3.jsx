import React, { useMemo } from 'react';
import ScreenScaffold from '../components/ScreenScaffold.jsx';
import EmptyState from '../components/molecules/EmptyState.jsx';
import Card from '../components/atoms/Card.jsx';
import Button from '../components/atoms/Button.jsx';

/**
 * Detalle de lote – Variante 3 (estado vacío en tabla)
 */
export default function DetalleDeLote3() {
  const rows = useMemo(() => [], []);
  return (
    <ScreenScaffold width={900}>
      <div className="header-bar header-bar--dark rounded-12 mb-12">
        <div className="text-xs opacity-90">Lotes / <strong>Lote #1012 – Variante 3</strong></div>
      </div>
      <Card>
        <EmptyState
          title="Sin cheques en este lote"
          description="Agregá cheques para verlos listados aquí."
          primary={{ children: 'Agregar cheque', variant: 'success', style: { fontWeight: 700 } }}
          secondary={{ children: 'Importar CSV' }}
        />
      </Card>
    </ScreenScaffold>
  );
}
