import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App.jsx';
import registerServiceWorker from './actions/registerServiceWorker';

ReactDOM.render(<App testProps={2} />, document.getElementById('root'));



registerServiceWorker();
