import React from 'react';
import Card from '../components/atoms/Card.jsx';

/**
 * Santi Responde – variante de logo (sin PNG).
 */
export default function SantiRespondeLogo1() {
  return (
    <div className="minh-60vh center-grid bg-light">
      <Card className="text-center w-520 max-w-100 rounded-16 p-24">
        <div className="inline-grid-2 gap-10 items-center">
          <div className="icon-44 rounded-10 grad-teal" />
          <div className="text-left">
            <div className="text-26 font-800 tracking-tight text-dark">Santi Responde</div>
            <div className="text-xs text-muted">Variante de marca</div>
          </div>
        </div>
      </Card>
    </div>
  );
}
