/*
 * index.js
 *
 * Renders the App Component onto the "Traditional" DOM.
 * Also useful for global CSS imports
 *
 */

import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './shared';

ReactDOM.render(<App />, document.getElementById('root'));
