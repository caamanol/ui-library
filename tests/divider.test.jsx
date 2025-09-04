import React from 'react';
import { describe, it, expect } from 'vitest';
import { renderWithTheme } from './utils.jsx';
import { Divider } from '../src/ui/index.js';

describe('Divider', () => {
  it('renders without crashing', () => {
    const { container } = renderWithTheme(<Divider />);
    // MUI Divider renders an <hr>
    expect(container.querySelector('hr')).toBeTruthy();
  });
});

