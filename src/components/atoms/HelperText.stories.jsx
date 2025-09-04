import React from 'react';
import HelperText from './HelperText.jsx';

export default { title: 'Atoms/HelperText', component: HelperText };

export const Variants = {
  render: () => (
    <div style={{ display: 'grid', gap: 6 }}>
      <HelperText>Ayuda</HelperText>
      <HelperText variant="error">Error</HelperText>
      <HelperText variant="success">Éxito</HelperText>
    </div>
  )
};

