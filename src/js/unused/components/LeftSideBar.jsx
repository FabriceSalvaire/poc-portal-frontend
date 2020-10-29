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
import { Route, Switch } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { PAGES } from '../pages.js';

/**************************************************************************************************/

const PageSidebarWrapper = (page) => (
    <div className='m-2'>
        <h2>{page.title}</h2>
        {page.sidebar && React.createElement(page.sidebar, {})}
    </div>
);

/**************************************************************************************************/

const SideBarStack = ({ location }) => (
    <Switch>
        {Object.values(PAGES).map((page, index) => (
            <Route
                key={index}
                path={page.path}
                exact={page.exact}
                component={() => PageSidebarWrapper(page)}
            />
        ))}
    </Switch>
);

/**************************************************************************************************/

export default
function LeftSideBar({ is_active, toggle_sidebar, location }) {
    // without Redux state
    // const [is_active, setIsActive] = useState(true);
    // onClick={() => setIsActive(false)}

    // on close : add class body-content-expanded #body-content

    return (
        <nav id='left-sidebar' className={ is_active ? 'active' : '' }>
            <div className='left-sidebar-wrapper'>
                { is_active ?
                  <div className='left-sidebar-header'>
                      <button id='close-left-sidebar' type='button' className='btn btn-sm round-shape'
                              onClick={() => toggle_sidebar()} >
                          <FontAwesomeIcon icon='caret-left' />
                      </button>
                  </div>
                  :
                  <div id='left-sidebar-open-wrapper'>
                      <button id='open-left-sidebar' type='button' className='btn btn-sm'
                              onClick={() => toggle_sidebar()} >
                          <FontAwesomeIcon icon='caret-right' />
                      </button>
                  </div>
                }

                <div className='left-sidebar-spacer'>
                    <div id='left-sidebar-scroll'>
                        {/* <ul className='sidebar-elements'></ul> */}
                        <SideBarStack location={location} />
                    </div>
                </div>

                <div className='left-sidebar-footer'>
                    <p>
                        <FontAwesomeIcon icon='copyright' />
                        <a href='' className='ml-1'>Portal 2020</a>
                    </p>
                </div>
            </div>
        </nav>
    );
}
