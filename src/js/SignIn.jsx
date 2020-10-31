/**************************************************************************************************/

import React from 'react';

import PropTypes from 'prop-types';

import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { makeStyles, useStyles, withStyles } from '@material-ui/core/styles';

import Copyright from './Copyright.jsx';

/**************************************************************************************************/

const centered_in_page_styles = makeStyles(theme => ({
    centered_in_page: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
}));

const CenteredInPage = ({children, ...props}) => {
  const classes = centered_in_page_styles(props);

  return (
    <div className={classes.centered_in_page}>
      {children}
    </div>
  );
}

/**************************************************************************************************/

function SignInBox() {
    return (
        <Paper elevation={3}>
            <Box p={3}>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    {/* <FormControlLabel */}
                    {/*     control={<Checkbox value="remember" color="primary" />} */}
                    {/*     label="Remember me" */}
                    {/* /> */}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        Sign In
                    </Button>
                    <Box mt={1}>
                        <Grid container direction="row-reverse">
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Forgot your password?
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </form>
                <Box mt={4}>
                    <Copyright />
                </Box>
            </Box>
        </Paper>
    );
}

export default function SignIn() {
    return (
        <CenteredInPage>
            <SignInBox/>
        </CenteredInPage>
    );
};
