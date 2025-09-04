import React from 'react';
import MuiAvatar from '@mui/material/Avatar';

export default function Avatar({ label, className = '' }) {
  const letter = label ? String(label).slice(0, 1).toUpperCase() : '';
  return <MuiAvatar className={className}>{letter}</MuiAvatar>;
}
