import { render, screen } from '@testing-library/react';
import QMScorecard from './QMScorecard.js';

test('renders learn react link', () => {
  render(<QMScorecard />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
