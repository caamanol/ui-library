import React from 'react';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormHelperText from '@mui/material/FormHelperText';

export default function FormField({ id, label, children, helper, error, className = '' }) {
  return (
    <FormControl className={className} error={Boolean(error)} fullWidth>
      {label && <FormLabel htmlFor={id}>{label}</FormLabel>}
      {children}
      {error ? (
        <FormHelperText>{error}</FormHelperText>
      ) : helper ? (
        <FormHelperText>{helper}</FormHelperText>
      ) : null}
    </FormControl>
  );
}
