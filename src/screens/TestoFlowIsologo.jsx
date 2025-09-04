import React from 'react';
import Card from '../components/atoms/Card.jsx';

/**
 * TestoFlow – isologo (sin PNG).
 */
export default function TestoFlowIsologo() {
  return (
    <div className="minh-60vh center-grid bg-light">
      <Card className="text-center w-520 max-w-100 rounded-16 p-24">
        <div className="flex items-center gap-12 justify-center">
          <div className="icon-44 rounded-12 grad-blue" />
          <div className="text-24 font-800 text-dark tracking-tight">TestoFlow</div>
        </div>
        <div className="mt-8 text-muted text-xs">Isologo</div>
      </Card>
    </div>
  );
}
