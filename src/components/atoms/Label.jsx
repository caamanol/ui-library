import React from 'react';
import FormLabel from '@mui/material/FormLabel';

export default function Label({ htmlFor, children, className = '' }) {
  return (
    <FormLabel htmlFor={htmlFor} className={className}>
      {children}
    </FormLabel>
  );
}
