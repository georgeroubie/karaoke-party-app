import { render, screen } from '@testing-library/react';
import Info from '../../app/pages/info';
import TestWrapper from '../Wrapper';

test('renders info page title', () => {
  render(
    <TestWrapper>
      <Info />
    </TestWrapper>,
  );

  const titleElement = screen.getByText('About');
  expect(titleElement).toBeInTheDocument();
});
