import React from 'react';
import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithTheme } from './utils.jsx';
import { FormField, Input } from '../src/ui/index.js';

describe('FormField', () => {
  it('renders label and helper', () => {
    renderWithTheme(
      <FormField id="email" label="Email" helper="Nunca compartiremos tu email.">
        <Input id="email" />
      </FormField>
    );
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Nunca compartiremos tu email.')).toBeInTheDocument();
  });

  it('renders error', () => {
    renderWithTheme(
      <FormField id="email" label="Email" error="Email inválido">
        <Input id="email" />
      </FormField>
    );
    expect(screen.getByText('Email inválido')).toBeInTheDocument();
  });
});

