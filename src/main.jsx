import 'modern-normalize';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { HelmetProvider } from 'react-helmet-async';
import { ModalProvider } from './context/ModalProvider.jsx';
import App from './App.jsx';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ModalProvider>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </ModalProvider>
    </BrowserRouter>
  </React.StrictMode>
);
