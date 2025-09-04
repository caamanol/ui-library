import React from 'react';
import Toolbar from './Toolbar.jsx';
import Button from '../atoms/Button.jsx';
import Select from '../atoms/Select.jsx';

export default { title: 'Molecules/Toolbar', component: Toolbar };

export const Basic = {
  render: () => (
    <Toolbar>
      <Button>Acción</Button>
      <Select>
        <option>Todos</option>
        <option>Pendiente</option>
      </Select>
    </Toolbar>
  )
};

