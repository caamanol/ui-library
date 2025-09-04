import React from 'react';
import MuiSwitch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function Switch({ label, checked, onChange, className = '' }) {
  return (
    <FormControlLabel
      className={className}
      control={<MuiSwitch checked={checked} onChange={onChange} size="small" />}
      label={label}
    />
  );
}
