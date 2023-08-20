// Import required modules from React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import the main App component and the CSS styles
import './index.css';
import App from './App';

// Import the function to report web vitals (performance metrics)
import reportWebVitals from './reportWebVitals';

// Create a root using ReactDOM.createRoot and render the App component within it
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

