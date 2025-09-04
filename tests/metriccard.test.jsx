import React from 'react';
import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithTheme } from './utils.jsx';
import { MetricCard } from '../src/ui/index.js';

describe('MetricCard', () => {
  it('renders title and value', () => {
    renderWithTheme(<MetricCard title="Total" value={42} />);
    expect(screen.getByText('Total')).toBeInTheDocument();
    expect(screen.getByText('42')).toBeInTheDocument();
  });
});

