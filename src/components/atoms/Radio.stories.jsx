import React, { useState } from 'react';
import Radio from './Radio.jsx';

export default { title: 'Atoms/Radio', component: Radio };

export const Group = {
  render: () => {
    const [v, setV] = useState('a');
    return (
      <div style={{ display: 'flex', gap: 12 }}>
        <Radio name="g" label="Opción A" checked={v === 'a'} onChange={() => setV('a')} />
        <Radio name="g" label="Opción B" checked={v === 'b'} onChange={() => setV('b')} />
      </div>
    );
  }
};

