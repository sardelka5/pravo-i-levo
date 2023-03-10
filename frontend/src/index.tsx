import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import storeN from './storeN';
import './index.css';
import App from './App/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  // <React.StrictMode>
  <Provider store={storeN}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    ,
  </Provider>,
  // </React.StrictMode>,
);
