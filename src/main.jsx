import React from 'react';
import ReactDOM from 'react-dom/client';
import Index from './views/Index';
import store from './app/store';
import { Provider } from 'react-redux';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Index />
    </Provider>
  </React.StrictMode>,
)
