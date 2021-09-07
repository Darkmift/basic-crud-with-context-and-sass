import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

import { ProductContextProvider } from './store/product-context'

ReactDOM.render(
  <React.StrictMode>
    <ProductContextProvider>
      <App />
    </ProductContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
