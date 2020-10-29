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

// import { from_timestamp, format_date, format_time, get_current_timestamp } from '../tools/date.js';

// import { set_api_token } from '../tools/rest_api.js';

/**************************************************************************************************/

export default
class WishlistModel {
    constructor(endpoint) {
	this._endpoint = endpoint;

	this._error = null;
	this._whishlist = null;

	// this.reload();
    }

    get foo() {
    	return this._foo;
    }

    get error() {
	return this._error;
    }

    async reload() {
	console.log('FooModel GET', this._endpoint);

	try {
	    let response = await fetch(this._endpoint, set_api_token());
	    let payload = await response.json();
	    console.log('FooModel xhr success', payload);
	    this._foo = payload;
	} catch(error) {
	    console.log('FooModel xhr error', error);
	    this._foo = [];
	    this._error = error;
	    // alert(error);
	}
    }
}
