import React from 'react';
import ReactDOM from 'react-dom';

import 'semantic-ui-css/semantic.min.css'
import './index.css';

import { Body } from './components/Body';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Body />, document.getElementById('root'));
registerServiceWorker();
