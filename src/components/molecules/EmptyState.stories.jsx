import React from 'react';
import EmptyState from './EmptyState.jsx';

export default {
  title: 'Molecules/EmptyState',
  component: EmptyState,
};

export const Basic = {
  args: {
    title: 'No hay datos',
    description: 'Crea tu primer elemento para empezar.',
    primary: { children: 'Crear' },
    secondary: { children: 'Saber más' },
  },
};

