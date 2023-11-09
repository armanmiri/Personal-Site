// Importing the necessary modules from the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
// Importing the main stylesheet for the application
import './index.css';
// Importing the main App component
import App from './App';
// Importing a utility function to report web vitals for performance analysis
import reportWebVitals from './reportWebVitals';

// Creating the root of the React application by selecting the 'root' DOM element
const root = ReactDOM.createRoot(document.getElementById('root'));
// Rendering the App component inside the React.StrictMode wrapper
// React.StrictMode is a tool for highlighting potential problems in an application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// This line is an optional performance measurement feature
// reportWebVitals can be used to log performance-related metrics or send them to a backend for analysis
// By default, it's not logging anything. To use it, you would need to pass a logging function as an argument
reportWebVitals();
