import { render, screen } from '@testing-library/react';
import App from './App';


// Smoke test for App component
it("should render without crashing", function() {
  render(<App />)
});

// Snapshot test for App component
it("should match snapshot", function() {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});