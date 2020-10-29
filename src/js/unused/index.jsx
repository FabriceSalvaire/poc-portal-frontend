/***************************************************************************************************
 *
 * Portal — 
 * Copyright (C) 2020 Fabrice Salvaire
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 **************************************************************************************************/

/**************************************************************************************************/

import React from 'react';
import ReactDOM from 'react-dom';

require('../scss/app.js');
require('./fontawesome.js');

import store from './bootstrap.js';
import Root from './Root.jsx';

// require('./graphql.js');

/**************************************************************************************************/

console.log('Start Web Application');

// Application is wrapped in <div id='app'></div>
const wrapper = document.getElementById('app');
if (wrapper)
    ReactDOM.render(<Root store={store} />, wrapper);
else
    console.log('Element id=app not found in the dom');
