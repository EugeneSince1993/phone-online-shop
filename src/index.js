import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProductProvider } from './context';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  /* ProductProvider is a top component in our app. 
  It's made for us to be able to get the information (data) from the whole application. */
  <ProductProvider>
    <Router>
      <App />
    </Router>
  </ProductProvider>
  , 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
