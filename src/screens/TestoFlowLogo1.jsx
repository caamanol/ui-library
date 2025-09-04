import React from 'react';
import Card from '../components/atoms/Card.jsx';

/**
 * TestoFlow – variante de logo (sin PNG).
 */
export default function TestoFlowLogo1() {
  return (
    <div className="minh-60vh center-grid bg-slate-50">
      <Card className="text-center w-480 max-w-100 rounded-16 p-24">
        <div className="flex items-center gap-12 justify-center">
          <div className="icon-44 rounded-12 grad-blue-soft" />
          <div className="text-dark font-800 tracking-tight text-24">TestoFlow</div>
        </div>
        <div className="mt-8 text-muted text-xs">Variante</div>
      </Card>
    </div>
  );
}
