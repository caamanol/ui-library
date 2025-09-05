import React from 'react';
import EmptyState from './EmptyState.jsx';
import Logo from '../../assets/CHEQUEMATE.png';

export default {
  title: 'Molecules/EmptyState',
  component: EmptyState,
};

export const Basic = {
  args: {
    title: 'No hay datos',
    description: 'Crea tu primer elemento para empezar.',
    primary: { children: 'Crear' },
    secondary: { children: 'Saber más' },
  },
};

export const PromoCard = {
  args: {
    iconSrc: Logo,
    iconAlt: 'Pieza de ajedrez',
    category: 'Automatización',
    title: 'ChequeMate IA',
    description: 'Digitalizá cheques en segundos con IA y OCR. Más velocidad, menos errores y control total de la información.',
    badge: { label: 'NUEVO', color: 'success' },
  },
};
