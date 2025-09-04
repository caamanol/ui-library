import React from 'react';
import MuiButton from '@mui/material/Button';

export default function Button({ variant = 'primary', className = '', fullWidth = false, disabled = false, ...props }) {
  let color = 'primary';
  let muiVariant = 'contained';
  if (variant === 'secondary') color = 'secondary';
  else if (variant === 'success') color = 'success';
  else if (variant === 'ghost') { muiVariant = 'text'; color = 'inherit'; }
  else if (variant === 'light') { muiVariant = 'outlined'; color = 'primary'; }
  else if (variant === 'outline-inverse') { muiVariant = 'outlined'; color = 'inherit'; }

  return (
    <MuiButton
      {...props}
      className={className}
      color={color}
      variant={muiVariant}
      fullWidth={fullWidth}
      disabled={disabled}
    />
  );
}
