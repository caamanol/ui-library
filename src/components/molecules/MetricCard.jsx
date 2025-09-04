import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function MetricCard({ title, value }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="overline" color="text.secondary">{title}</Typography>
        <Typography variant="h5">{value}</Typography>
      </CardContent>
    </Card>
  );
}
