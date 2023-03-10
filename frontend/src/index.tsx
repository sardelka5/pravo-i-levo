import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App/App';
import storeLaw from './storeLaw';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  // <React.StrictMode>
   <Provider store={storeLaw}>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  </Provider>,
  // </React.StrictMode>,
);
