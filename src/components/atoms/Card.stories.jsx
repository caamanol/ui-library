import React from 'react';
import Card from './Card.jsx';

export default {
  title: 'Atoms/Card',
  component: Card,
};

export const Basic = {
  render: () => (
    <Card>
      <div>Contenido dentro de Card</div>
    </Card>
  ),
};

