import React from 'react';
import MuiCheckbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function Checkbox({ label, className = '', ...props }) {
  return (
    <FormControlLabel
      className={className}
      control={<MuiCheckbox {...props} size="small" />}
      label={label}
    />
  );
}
