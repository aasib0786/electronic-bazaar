import React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Paper } from '@mui/material';
import Swal from 'sweetalert2';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { postData } from '../../services/FetchNodeServices';
var useStyles = makeStyles({
  AdminLogin: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  AdminLoginWrapper: {
    width: '30%',
    height: '60%',

  },
  AdminLoginBox: {
    marginTop: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
})

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function AdminLogin() {
  localStorage.clear()
  var navigate = useNavigate()
  var useStyle = useStyles()

  const [password, setPassword] = useState()
  const [email, setEmail] = useState()
  const [picture, setPicture] = useState()

  const handleSubmit = async (event) => {
    event.preventDefault();
    var body = { email: email, password: password }
    var response = await postData('admins/check_admin_login', body)
    if (response.status) {
      localStorage.setItem('ADMIN', JSON.stringify(response.data))
      navigate('/dashbord')
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Brand',
        text: response.message,
        toast: true
      })
    }
  };

  const handlesignup = () => {
    navigate('/adminregister')
  }

  return (<div className={useStyle.AdminLogin} >
    <Paper elevation={3} className={useStyle.AdminLoginWrapper}>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box className={useStyle.AdminLoginBox}>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                type="email"
                onChange={(event) => setEmail(event.target.value)}
                label="Email Address"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                onChange={(event) => setPassword(event.target.value)}
                label="Password"
                type="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  Don't have an account?<Button onClick={handlesignup} >Sign Up</Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </Paper>
  </div>
  );
}