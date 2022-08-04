import * as React                     from 'react';
import Avatar                         from '@mui/material/Avatar';
import Button                         from '@mui/material/Button';
import CssBaseline                    from '@mui/material/CssBaseline';
import TextField                      from '@mui/material/TextField';
import FormControlLabel               from '@mui/material/FormControlLabel';
import Checkbox                       from '@mui/material/Checkbox';
import Link                           from '@mui/material/Link';
import Paper                          from '@mui/material/Paper';
import Box                            from '@mui/material/Box';
import Grid                           from '@mui/material/Grid';
import LockOutlinedIcon               from '@mui/icons-material/LockOutlined';
import Typography                     from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './SignIn.css';
import { NavLink }                    from 'react-router-dom';

const theme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={ theme }>
      <Grid style={ { textAlign: "center" } } container component="main" sx={ { height: '100vh' } }>
        <CssBaseline/>
        <Grid
          item
          xs={ false }
          sm={ 4 }
          md={ 7 }
          className="Signin"
          sx={ {
            backgroundRepeat: 'no-repeat',
            // backgroundColor: (t) =>
            //   t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          } }
        />
        <Grid item xs={ 12 } sm={ 8 } md={ 5 } component={ Paper } elevation={ 6 } square>
          <Box
            sx={ {
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            } }
          >
            <Avatar sx={ { m: 1, bgcolor: 'secondary.main' } }>
              <LockOutlinedIcon/>
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={ handleSubmit } sx={ { mt: 1 } }>
              <TextField
                margin="normal"
                required
                // fullWidth
                style={ { width: "70%" } }
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                style={ { width: "70%" } }
                // fullWidth="70%"
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={ <Checkbox value="remember" color="primary"/> }
                label="Remember me"
                style={ { marginRight: "42%" } }
              />
              <Button
                type="submit"
                style={ { width: "70%" } }
                fullWidth
                variant="contained"
                sx={ { mt: 3, mb: 2 } }
              >
                <NavLink
                  to='/main'

                >
                  Sign In</NavLink>
              </Button>
              <Grid container>
                <Grid style={ { marginRight: "46%" } } item xs>
                  <Link href="#" variant="body2" style={ { color: "white" } }>
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Grid item>
            <Link href="#" variant="body2">
              <NavLink
                to='/Signup'

              >
                { "Don't have an account? Sign Up" }
              </NavLink>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}