import React from 'react';
import Button from '../atoms/Button.jsx';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';

/**
 * EmptyState promo card layout
 * Props:
 * - iconSrc, iconAlt, iconSize: imagen opcional (PNG/SVG). Si no, usa `iconClass` para un placeholder CSS.
 * - category: string azul sobre el título
 * - badge: string o { label, color }
 * - title, description
 * - primary, secondary: acciones opcionales (siguen funcionando)
 */
export default function EmptyState({
  iconClass = '',
  iconSrc,
  iconAlt,
  iconSize = 56,
  category,
  badge,
  title,
  description,
  primary,
  secondary,
}) {
  const badgeLabel = typeof badge === 'string' ? badge : badge?.label;
  const badgeColor = typeof badge === 'object' && badge?.color ? badge.color : 'success';

  return (
    <Card sx={{ borderStyle: 'dashed', borderWidth: 1, borderColor: 'divider', borderRadius: 2 }}>
      <CardContent>
        <Stack direction="row" spacing={2} alignItems="flex-start">
          {/* Icono */}
          {iconSrc ? (
            <Box component="img" src={iconSrc} alt={iconAlt || title || 'icon'} sx={{ width: iconSize, height: iconSize, objectFit: 'contain' }} />
          ) : (
            <Box className={iconClass} sx={{ width: iconSize, height: iconSize }} />
          )}

          {/* Contenido */}
          <Stack spacing={1.25} sx={{ flex: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              {category && (
                <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 600 }}>
                  {category}
                </Typography>
              )}
              {badgeLabel && (
                <Chip
                  label={badgeLabel}
                  size="small"
                  sx={(theme) => ({
                    bgcolor: alpha(theme.palette[badgeColor]?.main || theme.palette.success.main, 0.15),
                    color: theme.palette[badgeColor]?.dark || theme.palette.success.dark,
                    fontWeight: 700,
                  })}
                />
              )}
            </Box>

            {title && (
              <Typography variant="h3" sx={{ fontWeight: 700 }}>
                {title}
              </Typography>
            )}

            {description && (
              <Typography variant="body1" color="text.primary">
                {description}
              </Typography>
            )}

            {(primary || secondary) && (
              <Stack direction="row" spacing={1} sx={{ pt: 1 }}>
                {primary && <Button {...primary} />}
                {secondary && <Button variant="light" {...secondary} />}
              </Stack>
            )}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
