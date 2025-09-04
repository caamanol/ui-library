import React from 'react';
import MUIBreadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function Breadcrumbs({ items = [], onNavigate }) {
  return (
    <MUIBreadcrumbs aria-label="breadcrumb">
      {items.map((it, i) => (
        it.href ? (
          <Link
            key={i}
            color="inherit"
            href={it.href}
            underline="hover"
            onClick={onNavigate ? (e) => { e.preventDefault(); onNavigate(it, i); } : undefined}
          >
            {it.label}
          </Link>
        ) : (
          <Typography key={i} color="text.primary">{it.label}</Typography>
        )
      ))}
    </MUIBreadcrumbs>
  );
}
