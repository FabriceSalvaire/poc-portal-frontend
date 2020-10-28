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

// Fixme: .js.flow issue
// https://www.npmjs.com/package/flow-babel-webpack-plugin
//! import GraphiQL from 'graphiql';
// require('../../scss/graphiql.css');

import { set_api_token } from '../tools/rest_api.js';

/**************************************************************************************************/

const uri = 'http://localhost:8000/gql';

async function graphql_fetcher(graphql_query) {
    try {
        let config = {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(graphql_query),
        };
        let response = await fetch(uri, set_api_token(config));
        let payload = await response.json();
        return payload;
    } catch(error) {
	console.log('GraphQL xhr error', error);
	alert(error);
    }
}

const GraphiQLPage = () => (
    <div className='container'>
        {/* <GraphiQL fetcher={graphql_fetcher} /> */}
    </div>
);

export default GraphiQLPage;
