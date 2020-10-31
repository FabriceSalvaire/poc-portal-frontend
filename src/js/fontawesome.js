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

// https://www.npmjs.com/package/@fortawesome/react-fontawesome

import { library } from '@fortawesome/fontawesome-svg-core';

import * as FontAwesomeSolid from '@fortawesome/free-solid-svg-icons';
import * as FontAwesomeBrand from '@fortawesome/free-brands-svg-icons';

/**************************************************************************************************/

const icons = [
    FontAwesomeBrand.faItunes,
    FontAwesomeBrand.faYoutube,
    FontAwesomeSolid.faCaretLeft,
    FontAwesomeSolid.faCaretRight,
    FontAwesomeSolid.faCheckCircle,
    FontAwesomeSolid.faChevronLeft,
    FontAwesomeSolid.faChevronRight,
    FontAwesomeSolid.faCopyright,
    FontAwesomeSolid.faPlus,
];

for (let icon of icons)
    library.add(icon);
