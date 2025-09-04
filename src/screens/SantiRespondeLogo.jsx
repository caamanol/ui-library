import React from 'react';
import Card from '../components/atoms/Card.jsx';

/**
 * Santi Responde – marca (sin PNG).
 * Aproximación tipográfica + bloque isologo.
 */
export default function SantiRespondeLogo() {
  return (
    <div className="minh-60vh center-grid bg-light p-24">
      <Card className="text-center w-560 max-w-100 rounded-16 p-32 shadow-sm">
        <div className="inline-grid-2 gap-12 items-center">
          <div className="icon-48 rounded-12 grad-green" />
          <div className="text-left">
            <div className="text-2xl font-800 tracking-tight text-dark">Santi Responde</div>
            <div className="text-xs text-muted">Asistente inteligente para tus consultas</div>
          </div>
        </div>
      </Card>
    </div>
  );
}
