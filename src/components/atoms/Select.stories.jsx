import React from 'react';
import Select from './Select.jsx';

export default {
  title: 'Atoms/Select',
  component: Select,
};

export const Basic = {
  render: (args) => (
    <Select {...args}>
      <option>Todos</option>
      <option>Pendiente</option>
      <option>En proceso</option>
      <option>Aprobado</option>
      <option>Rechazado</option>
    </Select>
  ),
};

