import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Redirect, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import routes from './routes';
import './style.scss';

require('expose?$!expose?jQuery!jquery');
require('bootstrap-webpack');

injectTapEventPlugin();
const history = browserHistory;

ReactDOM.render(
    <Router history={history}>
        <Redirect from="/" to="main" />
        {routes}
    </Router>,
    document.getElementById('root')
);
