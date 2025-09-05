import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '../atoms/Avatar.jsx';

export default function TopBar({
  brand = 'opendevUI',
  title,
  brandColorClass = '',
  userEmail = 'usuario@example.com',
  onBrandClick,
  onAvatarClick,
  logoSrc,
  logoAlt,
  logoSize, // deprecated, kept for backward compatibility
  logoHeight = 32,
  toolbarVariant = 'regular', // 'dense' | 'regular'
  disableGutters = false,
}) {
  // Back-compat: if logoSize was provided, use it as height
  const effectiveLogoHeight = typeof logoSize === 'number' ? logoSize : logoHeight;
  const brandLabel = title || brand;
  return (
    <AppBar position="static" color="default" sx={{ bgcolor: 'background.paper' }}>
      <Toolbar variant={toolbarVariant} disableGutters={disableGutters}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexGrow: 1 }}>
          {logoSrc ? (
            <Box
              component="img"
              src={logoSrc}
              alt={logoAlt || brandLabel}
              sx={{
                height: effectiveLogoHeight,
                width: 'auto',
                objectFit: 'contain',
                cursor: onBrandClick ? 'pointer' : 'default',
                mr: 1,
              }}
              onClick={onBrandClick}
              aria-label="brand"
              role={onBrandClick ? 'button' : undefined}
            />
          ) : (
            <Box
              className={brandColorClass}
              sx={{ width: effectiveLogoHeight, height: effectiveLogoHeight, borderRadius: 0.5, bgcolor: 'primary.main', cursor: onBrandClick ? 'pointer' : 'default' }}
              onClick={onBrandClick}
              aria-label="brand"
              role={onBrandClick ? 'button' : undefined}
            />
          )}
          {brandLabel ? (
            <Typography variant="h6" onClick={onBrandClick} sx={{ cursor: onBrandClick ? 'pointer' : 'default' }}>
              {brandLabel}
            </Typography>
          ) : null}
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant="body2" color="text.secondary">{userEmail}</Typography>
          <span onClick={onAvatarClick} role={onAvatarClick ? 'button' : undefined} aria-label={onAvatarClick ? 'avatar' : undefined} style={{ cursor: onAvatarClick ? 'pointer' : 'default' }}>
            <Avatar label={userEmail} />
          </span>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
