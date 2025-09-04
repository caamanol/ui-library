import React, { useState } from 'react';
import Modal from './Modal.jsx';

export default { title: 'Molecules/Modal', component: Modal };

export const Basic = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <div>
        <button onClick={() => setOpen(true)}>Abrir</button>
        <Modal
          open={open}
          title="Título del modal"
          onClose={() => setOpen(false)}
          primary={{ children: 'Confirmar' }}
          secondary={{ children: 'Cancelar', onClick: () => setOpen(false) }}
        >
          <div>Contenido del modal</div>
        </Modal>
      </div>
    );
  }
};

