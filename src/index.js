// import React from 'react';
// import ReactDOM from 'react-dom';
// // src/index.js
// // src/index.js
// import reportWebVitals from './reportWebVitals';  // Relative import from 'src/reportWebVitals.js'
// import './index.css'; // Optional if you have a CSS file
// import App from './App'; // Assuming App.js is the main component


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint.
// reportWebVitals();


// // src/index.js
// import React from 'react';
// import ReactDOM from 'react-dom/client'; // use `react-dom/client` for React 18
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// // Create a root element to render your app
// const root = ReactDOM.createRoot(document.getElementById('root')); 

// // Render the App component using the root
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to measure performance in your app
// reportWebVitals();

// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client' for React 18
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Create root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// For performance tracking
reportWebVitals();
