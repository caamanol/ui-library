import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithTheme } from './utils.jsx';
import { TopBar } from '../src/ui/index.js';

describe('TopBar', () => {
  it('shows brand and user email', () => {
    renderWithTheme(<TopBar brand="opendevUI" userEmail="user@example.com" />);
    expect(screen.getByText('opendevUI')).toBeInTheDocument();
    expect(screen.getByText('user@example.com')).toBeInTheDocument();
  });
  it('fires onBrandClick and onAvatarClick', () => {
    const onBrandClick = vi.fn();
    const onAvatarClick = vi.fn();
    renderWithTheme(<TopBar brand="opendevUI" userEmail="user@example.com" onBrandClick={onBrandClick} onAvatarClick={onAvatarClick} />);
    fireEvent.click(screen.getByText('opendevUI'));
    expect(onBrandClick).toHaveBeenCalled();
    const avatarBtn = screen.getByRole('button', { name: 'avatar' });
    fireEvent.click(avatarBtn);
    expect(onAvatarClick).toHaveBeenCalled();
  });
});
