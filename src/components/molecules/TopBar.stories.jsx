import React from 'react';
import TopBar from './TopBar.jsx';
import Logo from '../../assets/CHEQUEMATE.png';
import Button from '../atoms/Button.jsx';

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

export const WithActions = {
  render: (args) => (
    <TopBar
      {...args}
      actions={
        <>
          <Button variant="light">Docs</Button>
          <Button>Crear</Button>
        </>
      }
    />
  ),
  args: {
    brand: 'Chequemate',
    userEmail: 'lucas@opendev.tools',
    logoSrc: Logo,
  },
};

export const WithActionsLeft = {
  render: (args) => (
    <TopBar
      {...args}
      actions={
        <>
          <Button variant="light">Docs</Button>
          <Button>Crear</Button>
        </>
      }
      actionsPosition="left"
    />
  ),
  args: {
    brand: 'Chequemate',
    userEmail: 'lucas@opendev.tools',
    logoSrc: Logo,
  },
};
