import React from 'react';
import MuiRadio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function Radio({ label, name, className = '', ...props }) {
  return (
    <FormControlLabel
      className={className}
      control={<MuiRadio name={name} {...props} size="small" />}
      label={label}
    />
  );
}
