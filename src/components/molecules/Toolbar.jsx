import React from 'react';
import Stack from '@mui/material/Stack';

export default function Toolbar({ children, className = '' }) {
  return (
    <Stack className={className} direction="row" spacing={1} alignItems="center">
      {children}
    </Stack>
  );
}
