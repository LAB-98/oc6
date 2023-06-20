// Import React and necessary React DOM libraries.
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import the global styles.
import './index.css';

// Import the main App component.
import App from './App';

// Import the reportWebVitals function, which is used to measure the performance of the app.
import reportWebVitals from './reportWebVitals';

// Create a concurrent root on a DOM node.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component within this root.
// The App component is wrapped in React's StrictMode, which checks for potential problems in the app during development.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Call the reportWebVitals function, which can be used to measure the performance of the app.
// You can pass a function to log the results (for example: reportWebVitals(console.log))
// or send them to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
