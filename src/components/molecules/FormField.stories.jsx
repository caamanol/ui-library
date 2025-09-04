import React from 'react';
import FormField from './FormField.jsx';
import Input from '../atoms/Input.jsx';

export default { title: 'Molecules/FormField', component: FormField };

export const WithHelper = {
  render: () => (
    <FormField id="email" label="Email" helper="Nunca compartiremos tu email.">
      <Input id="email" placeholder="tu@correo.com" />
    </FormField>
  )
};

export const WithError = {
  render: () => (
    <FormField id="email" label="Email" error="Email inválido">
      <Input id="email" placeholder="tu@correo.com" />
    </FormField>
  )
};

