import React from 'react';
import Card from '../components/atoms/Card.jsx';

/**
 * ChequeMate – isologo (sin PNG).
 */
export default function ChequeMateIsologo() {
  return (
    <div className="minh-60vh center-grid bg-light">
      <Card className="text-center w-420 max-w-100 rounded-16 p-24">
        <div className="flex items-center gap-12 justify-center">
          <div className="icon-48 rounded-12 grad-green" />
          <div className="text-dark font-800 tracking-tight text-24">ChequeMate</div>
        </div>
        <div className="mt-8 text-muted text-sm">Isologo reconstruido</div>
      </Card>
    </div>
  );
}
