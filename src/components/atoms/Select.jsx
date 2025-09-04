import React from 'react';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function Select({ className = '', fullWidth = false, ...props }) {
  return (
    <FormControl className={className} size="small" fullWidth={fullWidth}>
      <NativeSelect {...props} />
    </FormControl>
  );
}
