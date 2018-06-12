import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Shop from './container/Shop/Shop';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Shop />, document.getElementById('root'));
registerServiceWorker();
