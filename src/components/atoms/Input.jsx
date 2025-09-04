import React from 'react';
import TextField from '@mui/material/TextField';

export default function Input({ className = '', ...props }) {
  return <TextField {...props} className={className} size="small" />;
}
