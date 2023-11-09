// Importing functions from the React Testing Library to facilitate testing
import { render, screen } from '@testing-library/react';

// Importing the App component to be tested
import App from './App';

// Defining a test case named 'renders learn react link'
test('renders learn react link', () => {
  // Render the App component in a virtual DOM for testing
  render(<App />);
  // Using a DOM query to find an element with text that matches the regular expression /learn react/i
  const linkElement = screen.getByText(/learn react/i);
  // Asserting that the found linkElement is actually present in the document
  expect(linkElement).toBeInTheDocument();
});
