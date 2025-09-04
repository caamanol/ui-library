import React from 'react';
import Card from '../components/atoms/Card.jsx';

/**
 * Santi Responde – isologo (sin PNG).
 */
export default function SantiRespondeIsologo() {
  return (
    <div className="minh-60vh center-grid bg-light">
      <Card className="text-center w-420 max-w-90 rounded-16 p-24">
        <div className="flex items-center gap-12 justify-center">
          <div className="icon-44 rounded-12 grad-green" />
          <div className="text-dark font-800 text-24">Santi</div>
        </div>
        <div className="mt-8 text-muted text-xs">Isologo</div>
      </Card>
    </div>
  );
}
