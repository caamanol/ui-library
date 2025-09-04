import React from 'react';
import Card from '../components/atoms/Card.jsx';
import Button from '../components/atoms/Button.jsx';

/**
 * Home OpenDev IA Tools – hub (sin PNG).
 */
export default function HomeOpenDevIATools() {
  const apps = [
    { name: 'Chequemate', desc: 'Gestión de cheques', colorClass: 'bg-green' },
    { name: 'Santi Responde', desc: 'Asistente inteligente', colorClass: 'bg-green' },
    { name: 'TestoFlow', desc: 'Testing rápido', colorClass: 'grad-blue' },
  ];

  return (
    <div className="minh-80vh center-grid bg-deep-navy text-white p-24">
      <div className="w-full max-w-1040">
        <div className="text-center mb-24">
          <div className="text-2xl font-900 tracking-tight">OpenDev IA Tools</div>
          <div className="opacity-85">Suite de herramientas impulsadas por IA</div>
        </div>
        <div className="grid-3 gap-16">
          {apps.map((a) => (
            <Card key={a.name} className="text-dark">
              <div className="flex items-center gap-12">
                <div className={`rounded-10 size-40 ${a.colorClass}`} />
                <div>
                  <div className="font-800">{a.name}</div>
                  <div className="text-muted text-xs">{a.desc}</div>
                </div>
              </div>
              <div className="mt-12 flex gap-8">
                <Button>Abrir</Button>
                <Button variant="secondary">Detalles</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
