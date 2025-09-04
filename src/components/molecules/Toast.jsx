import React from 'react';
import Alert from '@mui/material/Alert';

export default function Toast({ children, variant = 'error', className = '' }) {
  const severity = variant === 'error' ? 'error' : 'info';
  return <Alert className={className} severity={severity}>{children}</Alert>;
}
