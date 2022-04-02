import { render, screen } from '@testing-library/react';
import NotFound from '../../app/pages/NotFound';
import TestWrapper from '../Wrapper';

test('renders not found page title', () => {
  render(
    <TestWrapper>
      <NotFound />
    </TestWrapper>,
  );

  const titleElement = screen.getByText('Oops :(');
  expect(titleElement).toBeInTheDocument();
});
