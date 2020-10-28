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

import ApolloClient from "apollo-boost";
// import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import gql from 'graphql-tag';

import { set_api_token } from './tools/rest_api.js';

/**************************************************************************************************/

const uri = 'http://localhost:8000/gql';

const apollo_client = new ApolloClient({
    uri: uri,
    headers: set_api_token().headers,
});

// const apollo_cache = new InMemoryCache();

// const apollo_link = new HttpLink({
//     uri: uri,
// });

// const apollo_client = new ApolloClient({
//     cache: apollo_cache,
//     link: apollo_link,
// });

const query = gql`
{
}
`;

apollo_client.query({
    query: query,
}) .then(result => console.log(result));
