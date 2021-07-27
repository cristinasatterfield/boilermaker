import React from 'react';
import ReactDom from 'react-dom'
import App from './App'
import { Provider } from 'react-redux';
import store from './store/index'

ReactDom.render(
  <Provider store={store}>
    <div>Hello, World</div>
  </Provider>,
  document.getElementById('app')
)
