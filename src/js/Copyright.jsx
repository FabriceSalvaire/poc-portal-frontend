/**************************************************************************************************/

import React from 'react';

import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

/**************************************************************************************************/

const title = 'Portal';
const url = 'http://...';

export default function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="{url}">
                {title}
            </Link>{' '}
            {new Date().getFullYear()}
            {/* {'.'} */}
        </Typography>
    );
}
