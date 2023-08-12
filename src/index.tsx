import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { FilterContextProvider } from './Context/FilterContext';
import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FilterContextProvider>
        <App />
      </FilterContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
