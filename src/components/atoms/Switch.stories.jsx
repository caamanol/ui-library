import React, { useState } from 'react';
import Switch from './Switch.jsx';

export default { title: 'Atoms/Switch', component: Switch };

export const Controlled = {
  render: () => {
    const [on, setOn] = useState(false);
    return <Switch label={on ? 'On' : 'Off'} checked={on} onChange={e => setOn(e.target.checked)} />;
  }
};

