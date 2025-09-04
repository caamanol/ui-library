import React from 'react';
import MuiPagination from '@mui/material/Pagination';

export default function Pagination({ current = 1, totalPages = 1, onChange }) {
  return (
    <MuiPagination
      page={current}
      count={totalPages}
      onChange={(_, p) => onChange?.(p)}
      size="small"
    />
  );
}
