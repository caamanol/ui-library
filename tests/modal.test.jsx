import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithTheme } from './utils.jsx';
import { Modal } from '../src/ui/index.js';

describe('Modal', () => {
  it('renders title and content when open', () => {
    const onClose = vi.fn();
    renderWithTheme(
      <Modal
        open
        title="Título del modal"
        onClose={onClose}
        primary={{ children: 'Confirmar' }}
        secondary={{ children: 'Cancelar' }}
      >
        <div>Contenido del modal</div>
      </Modal>
    );
    expect(screen.getByText('Título del modal')).toBeInTheDocument();
    expect(screen.getByText('Contenido del modal')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /confirmar/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /cancelar/i })).toBeInTheDocument();
  });
  it('fires onConfirm and onCancel', () => {
    const onConfirm = vi.fn();
    const onCancel = vi.fn();
    renderWithTheme(
      <Modal open title="Título" onConfirm={onConfirm} onCancel={onCancel}>
        <div>Contenido</div>
      </Modal>
    );
    fireEvent.click(screen.getByRole('button', { name: /cancelar/i }));
    fireEvent.click(screen.getByRole('button', { name: /confirmar/i }));
    expect(onCancel).toHaveBeenCalled();
    expect(onConfirm).toHaveBeenCalled();
  });
});
