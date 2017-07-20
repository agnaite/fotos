/* eslint new-cap: 0 */

import React from 'react';
import { Route } from 'react-router';

/* containers */
import { App } from './containers/App';
import NotFound from './components/NotFound';

export default (
    <Route path="/" component={App}>
        <Route path="*" component={NotFound} />
    </Route>
);
