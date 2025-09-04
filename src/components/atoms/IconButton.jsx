import React from 'react';
import MuiIconButton from '@mui/material/IconButton';

export default function IconButton({ variant = 'secondary', className = '', children = '•', ...props }) {
  let color = 'default';
  if (variant === 'primary') color = 'primary';
  else if (variant === 'secondary') color = 'secondary';
  else if (variant === 'ghost') color = 'inherit';

  return (
    <MuiIconButton {...props} className={className} color={color} aria-label={props['aria-label'] || 'icon button'}>
      {children}
    </MuiIconButton>
  );
}
