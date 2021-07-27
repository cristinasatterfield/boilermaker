import React from 'react';
import ReactDom from 'react-dom'
import { Router } from 'react-router-dom'
import App from './App'

ReactDom.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('app')
)
