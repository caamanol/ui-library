import React from 'react';
import Button from '../atoms/Button.jsx';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

export default function EmptyState({ iconClass = '', title, description, primary, secondary }) {
  return (
    <Card>
      <CardContent>
        <Stack alignItems="center" spacing={1.5} textAlign="center">
          <div className={iconClass} />
          {title && <Typography variant="h6">{title}</Typography>}
          {description && <Typography variant="body2" color="text.secondary">{description}</Typography>}
          <Stack direction="row" spacing={1}>
            {primary && <Button {...primary} />}
            {secondary && <Button variant="secondary" {...secondary} />}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
