import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Page from '../app/page';

describe('home page', () => {
  it('renders the main marketplace heading', () => {
    render(<Page />);
    expect(screen.getByRole('heading', { name: /find trusted local experts/i })).toBeInTheDocument();
  });
});
