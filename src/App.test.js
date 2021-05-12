import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders sign In With Google', async () => {
  render(<App />);
  const linkElement = await waitFor(() => screen.getByText(/Sign in with Google/i));
  expect(linkElement).toBeInTheDocument();
});
