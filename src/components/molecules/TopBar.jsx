import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '../atoms/Avatar.jsx';

export default function TopBar({
  brand = 'opendevUI',
  brandColorClass = '',
  userEmail = 'usuario@example.com',
  onBrandClick,
  onAvatarClick,
  logoSrc,
  logoAlt,
  logoSize = 24,
}) {
  return (
    <AppBar position="static" color="default" sx={{ bgcolor: 'background.paper' }}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexGrow: 1 }}>
          {logoSrc ? (
            <Box
              component="img"
              src={logoSrc}
              alt={logoAlt || brand}
              sx={{ width: logoSize, height: logoSize, objectFit: 'contain', cursor: onBrandClick ? 'pointer' : 'default' }}
              onClick={onBrandClick}
              aria-label="brand"
              role={onBrandClick ? 'button' : undefined}
            />
          ) : (
            <Box
              className={brandColorClass}
              sx={{ width: logoSize, height: logoSize, borderRadius: 0.5, bgcolor: 'primary.main', cursor: onBrandClick ? 'pointer' : 'default' }}
              onClick={onBrandClick}
              aria-label="brand"
              role={onBrandClick ? 'button' : undefined}
            />
          )}
          <Typography variant="h6" onClick={onBrandClick} sx={{ cursor: onBrandClick ? 'pointer' : 'default' }}>{brand}</Typography>
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
