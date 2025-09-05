import React from 'react';
import TopBar from './TopBar.jsx';
import Logo from '../../assets/CHEQUEMATE.png';

export default {
  title: 'Molecules/TopBar',
  component: TopBar,
};

export const Default = {
  args: {
    brand: 'Chequemate',
    brandColorClass: 'bg-green',
    userEmail: 'lucas@opendev.tools',
  },
};

export const WithLogo = {
  args: {
    brand: 'Chequemate',
    userEmail: 'lucas@opendev.tools',
    logoSrc: Logo,
    logoAlt: 'Chequemate',
  },
};
