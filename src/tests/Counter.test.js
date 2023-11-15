// import necessary react testing library helpers here
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
// import the Counter component here
import Counter from "../components/Counter";

let component;

beforeEach(() => {
  // Render the Counter component here
  component = render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const { getByText } = component;
  expect(getByText('Counter')).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const {getByTestId} = component;
  expect(getByTestId('count')).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const {getByTestId, getByText} = component;
  const incrementButton = getByText('+');
  fireEvent.click(incrementButton);
  expect(getByTestId('count')).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const {getByTestId, getByText} = component;
  const decrementButton = getByText('-');
  fireEvent.click(decrementButton);
  expect(getByTestId('count')).toHaveTextContent('-1');
});
