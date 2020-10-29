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

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { PAGES } from './pages.js';

import LeftSideBar from './containers/LeftSideBar.js';
import { Skippy, TopNavBar} from './components/TopNavBar.jsx';

/**************************************************************************************************/

/*
const ThemeContext = React.createContext('...');
<ThemeContext.Provider value={theme}>
</ThemeContext.Provider>
*/

/*
const About = () => (
    <div className='container'>
        <h2>About</h2>
    </div>
);
*/

/**************************************************************************************************/

const PageStack = () => (
    <Switch>
        {Object.values(PAGES).map((route, index) => (
            <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.page}
            />
        ))}
    </Switch>
);

/**************************************************************************************************/

const Application = props => (
    <div>
        <Skippy />
        <TopNavBar />

        <div id='body-content'>
            <div className='container-fluid'>
                <div className='row flex-xl-nowrap'>
                    <main className='col-12 py-md-3' role='main'>
                        <PageStack />
                    </main>
                </div>
            </div>
        </div>

        <LeftSideBar location={props.location} />
    </div>
);

export default Application;
