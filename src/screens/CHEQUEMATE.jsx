import React from 'react';
import Button from '../components/atoms/Button.jsx';

/**
 * CHEQUEMATE – landing de marca sin PNG.
 */
export default function CHEQUEMATE() {
  return (
    <div className="minh-80vh center-grid bg-deep-slate">
      <div className="text-center text-white p-24">
        <div className="inline-grid-2 gap-12 items-center">
          <div className="icon-56 rounded-14 grad-green" />
          <div className="text-left">
            <div className="text-3xl font-900 tracking-tighter">CHEQUEMATE</div>
            <div className="text-sm opacity-85">Gestión simple y clara de cheques</div>
          </div>
        </div>
        <div className="mt-20 flex gap-10 justify-center">
          <Button variant="light">Ingresar</Button>
          <Button variant="outline-inverse">Saber más</Button>
        </div>
      </div>
    </div>
  );
}
