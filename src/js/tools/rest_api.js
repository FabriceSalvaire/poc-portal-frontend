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

// Fixme:
import { REST_API_TOKEN } from '../config.js';

/**************************************************************************************************/

const DEFAULT_CONFIG = {
    method: 'GET',
    headers: {
        Authorization: 'Token ' + REST_API_TOKEN,
    },
};

/**************************************************************************************************/

export
function set_api_token(config = {}) {
    let merged_config = {...DEFAULT_CONFIG, ...config};
    merged_config.headers = {...DEFAULT_CONFIG.headers, ...config.headers};
    return merged_config;
}
