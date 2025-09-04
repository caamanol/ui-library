import React from 'react';
import Badge from './Badge.jsx';

export default {
  title: 'Atoms/Badge',
  component: Badge,
};

export const Variants = {
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <Badge>Neutral</Badge>
      <Badge variant="success">Aprobado</Badge>
      <Badge variant="info">En proceso</Badge>
      <Badge variant="warning">Pendiente</Badge>
      <Badge variant="danger">Rechazado</Badge>
    </div>
  ),
};

