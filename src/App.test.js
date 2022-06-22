import { render, screen, fireEvent } from '@testing-library/react';
import App, { replaceCamelWithSpaces } from './App';

test('button has correct initial color', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })

  //expect background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' })

  //click button
  fireEvent.click(colorButton);

  //expect background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' })

  //expect button text to be "change to red"
  expect(colorButton).toHaveTextContent('Change to red');
});

test('Initial conditions', () => {
  render(<App />);

  //check that button is initially enabled
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })
  expect(colorButton).toBeEnabled();

  //check that the checkbox is initially unchecked
  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).not.toBeChecked();
})

test('Functionality test', () => {

  //check that button is disabled
  render(<App />);
  const button = screen.getByRole('button')
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' })

  //check if checkbox is checked
  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
  expect(button).toHaveStyle({ backgroundColor: 'grey' })

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});

describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red')
  });
  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue')
  });
  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red')
  });
})