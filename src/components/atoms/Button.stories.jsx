import React from 'react';
import Button from './Button.jsx';

export default {
  title: 'Atoms/Button',
  component: Button,
  args: { children: 'Button' },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['primary','secondary','success','ghost','light','outline-inverse'],
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { variant: 'primary' };

export const Secondary = Template.bind({});
Secondary.args = { variant: 'secondary' };

export const Success = Template.bind({});
Success.args = { variant: 'success' };

export const Ghost = Template.bind({});
Ghost.args = { variant: 'ghost' };

export const Light = Template.bind({});
Light.args = { variant: 'light' };

export const OutlineInverse = Template.bind({});
OutlineInverse.args = { variant: 'outline-inverse' };

