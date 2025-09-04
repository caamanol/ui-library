import React from 'react';
import TextField from '@mui/material/TextField';

export default function Textarea({ className = '', rows = 4, ...props }) {
  return (
    <TextField
      {...props}
      className={className}
      size="small"
      multiline
      minRows={rows}
    />
  );
}
