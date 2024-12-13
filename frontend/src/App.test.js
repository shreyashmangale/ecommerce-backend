import { render, screen } from '@testing-library/react';
import App from './App.js';

test('renders signup page ', () => {
  render(<App />);
  const signupElement = screen.getByText(/Sign Up/i);
  expect(signupElement).toBeInTheDocument();
});
