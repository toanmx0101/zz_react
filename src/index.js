import React from 'react';
import reducer from './reducers'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './styles/index.css';
import App from './components/App.jsx';
import registerServiceWorker from './actions/registerServiceWorker';
import { getAllArticles } from './actions'


const store = createStore(reducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();
