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

import { connect } from 'react-redux';
import { withRouter } from "react-router";

import { toggle_sidebar } from '../modules/sidebar/actions.js';
import LeftSideBar from '../components/LeftSideBar.jsx';

/**************************************************************************************************/

const map_state_to_props = state => ({
    is_active: state.sidebar.is_active,
});

const map_dispatch_to_props = dispatch => ({
    toggle_sidebar: () => dispatch(toggle_sidebar())
});

// https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/blocked-updates.md#quick-solution
// withRouter(...)
export default connect(
  map_state_to_props,
  map_dispatch_to_props
)(LeftSideBar);
