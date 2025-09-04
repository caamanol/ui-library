import React from 'react';
import Chip from '@mui/material/Chip';

export default function Badge({ children, variant = 'neutral', className = '' }) {
  let color = 'default';
  if (variant === 'success') color = 'success';
  else if (variant === 'info') color = 'info';
  else if (variant === 'warning') color = 'warning';
  else if (variant === 'danger') color = 'error';

  return <Chip className={className} label={children} color={color} size="small" variant={variant === 'neutral' ? 'outlined' : 'filled'} />;
}
