import React from 'react';
import IconButton from './IconButton.jsx';

export default { title: 'Atoms/IconButton', component: IconButton };

export const Variants = {
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <IconButton variant="primary">★</IconButton>
      <IconButton variant="secondary">☆</IconButton>
      <IconButton variant="ghost">⋯</IconButton>
    </div>
  ),
};

