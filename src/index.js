import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GithubNotifier from './GithubNotifier';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<GithubNotifier />, document.getElementById('root'));
registerServiceWorker();
