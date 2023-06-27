import { render,  screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const input = screen.getByPlaceholderText('mobile number');

  // Test input without formatting
  fireEvent.change(input, { target: { value: '123456' } });
  expect(input.value).toBe('(123) 456');

  // Test input with formatting
  fireEvent.change(input, { target: { value: '1234567890' } });
  expect(input.value).toBe('(123) 456-7890');
});
