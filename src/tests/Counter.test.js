/* eslint-disable testing-library/no-render-in-setup */
// import necessary react testing library helpers here
// import the Counter component here
import { render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import "@testing-library/jest-dom"
import Counter from '../components/Counter'


let counter;

beforeEach(() => {
  render(<Counter />);
  counter = screen.getByTestId("count");
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  expect(screen.getByText("Counter")).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  expect(counter).toHaveTextContent("0");
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
    let incrementButton = screen.getByRole("button", {name: "+"});
    userEvent.click(incrementButton);
    expect(counter).toHaveTextContent("1");
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  let decrementButton = screen.getByRole("button", {name: "-"});
  userEvent.click(decrementButton);
  expect(counter).toHaveTextContent("-1");
});
