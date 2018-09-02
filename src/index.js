import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Root from 'client/Root';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.hydrate(<Root />, document.getElementById('root'));
// registerServiceWorker();
