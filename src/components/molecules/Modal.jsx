import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '../atoms/Button.jsx';

export default function Modal({ open, title, children, onClose, primary, secondary, onConfirm, onCancel }) {
  const primaryBtn = primary || (onConfirm ? { children: 'Confirmar', onClick: onConfirm } : null);
  const secondaryBtn = secondary || (onCancel ? { children: 'Cancelar', onClick: onCancel } : null);

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent dividers>{children}</DialogContent>
      {(primaryBtn || secondaryBtn) && (
        <DialogActions>
          {secondaryBtn && <Button variant="light" {...secondaryBtn} />}
          {primaryBtn && <Button {...primaryBtn} />}
        </DialogActions>
      )}
    </Dialog>
  );
}
