import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { WorkoutsContextProvider } from './context/WorkoutsContext';

const root = createRoot(document.getElementById('root'));
root.render(
  <WorkoutsContextProvider>
    <App />
  </WorkoutsContextProvider>
);