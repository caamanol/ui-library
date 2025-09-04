import React, { useState } from 'react';
import Checkbox from './Checkbox.jsx';

export default { title: 'Atoms/Checkbox', component: Checkbox };

export const Controlled = {
  render: () => {
    const [v, setV] = useState(false);
    return <Checkbox label={`Acepto (${v ? 'sí' : 'no'})`} checked={v} onChange={e => setV(e.target.checked)} />;
  }
};

