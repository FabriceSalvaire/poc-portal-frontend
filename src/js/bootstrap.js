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

import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

// import XXX from './modules/XXX/reducer';
import sidebar from './modules/sidebar/reducer';

/**************************************************************************************************/

const initial_state = {
    // left_sidebar
    sidebar: {
        is_active: true,
    },
};

const reducers = combineReducers({
    sidebar,
});

const logger_middleware = createLogger();

const middleware = [
    thunkMiddleware,
    logger_middleware,
];

// https://github.com/zalmoxisus/redux-devtools-extension#usage
const compose_enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    initial_state,
    compose_enhancers(applyMiddleware(...middleware)),
);

export default store;
