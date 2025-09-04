import React from 'react';
import Card from '../components/atoms/Card.jsx';

/**
 * TestoFlow – logo (sin PNG).
 */
export default function TestoFlowLogo() {
  return (
    <div className="minh-60vh center-grid bg-indigo-50">
      <Card className="text-center w-520 max-w-100 rounded-16 p-24">
        <div className="inline-grid-2 gap-12 items-center">
          <div className="icon-52 rounded-14 grad-blue" />
          <div className="text-left">
            <div className="text-2xl font-900 tracking-tight text-slate-800">TestoFlow</div>
            <div className="text-xs text-muted">Testing rápido y confiable</div>
          </div>
        </div>
      </Card>
    </div>
  );
}
