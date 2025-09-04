import React from 'react';
import MuiCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function Card({ padded = true, className = '', children, ...props }) {
  return (
    <MuiCard className={className} {...props}>
      {padded ? <CardContent>{children}</CardContent> : children}
    </MuiCard>
  );
}
