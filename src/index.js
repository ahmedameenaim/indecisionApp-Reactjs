import React from 'react';
import ReactDOM from 'react-dom';
import Indecisionapp from './Indecisionapp';
import registerServiceWorker from './registerServiceWorker';
import Counter from './Counter'
import Visible from './Visible';
import 'normalize.css/normalize.css';
import index from './index.css';

ReactDOM.render(<Indecisionapp />, document.getElementById('root'));
registerServiceWorker();
