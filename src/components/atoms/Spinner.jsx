import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export default function Spinner({ className = '', size = 20 }) {
  return <CircularProgress className={className} size={size} />;
}
