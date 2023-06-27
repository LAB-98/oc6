// Import React and necessary React DOM libraries.
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import the main App component.
import App from './App';

// Create a concurrent root on a DOM node.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component within this root.
// The App component is wrapped in React's StrictMode, which checks for potential problems in the app during development.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
