import React from 'react';
import FormHelperText from '@mui/material/FormHelperText';

export default function HelperText({ children, variant = 'muted', className = '' }) {
  const error = variant === 'error';
  const sx = !error && variant === 'success' ? { color: 'success.main' } : undefined;
  return (
    <FormHelperText className={className} error={error} sx={sx}>
      {children}
    </FormHelperText>
  );
}
