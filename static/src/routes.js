/* eslint new-cap: 0 */

import React from 'react';
import { Route } from 'react-router';

/* containers */
import { App } from './components/App';
import { Home } from './components/Home';
import { Albums } from './components/Albums'
import { CreateAlbum } from './components/CreateAlbum'
import NotFound from './components/NotFound';

export default (
    <Route path="/" component={App}>
        <Route path="main" component={Home} />
        <Route path="albums" component={Albums} />
        <Route path="create-album" component={CreateAlbum} />
        <Route path="*" component={NotFound} />
    </Route>
);
