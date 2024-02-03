import  React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import { serverURL } from '../../services/FetchNodeServices';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { Paper } from '@mui/material';
import { postData } from '../../services/FetchNodeServices';
import Swal from 'sweetalert2';


var useStyles = makeStyles({

    AdminRegister:{
        width:'100vw',
        height:'100vh',
        display:'flex',
        alignItems:'center',
       justifyContent:'center',
    },
    AdminRegisterWrapper:{
       width:'30%',
       height:'80%',
     
    },
    AdminRegisterBox:{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    
      },
})


// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function AdminRegister() {
    var useStyle = useStyles()
    var navigate = useNavigate()
    const [firstName , setFistName] = useState()
    const [lastName , setLastName] = useState()
    const [mobailNumber , setMobailNumber] = useState()
    const [password , setPassword] = useState()
    const [email , setEmail] = useState()
    const [picture ,setPicture] = useState({})


  const handleSubmit =async () => {
    var formData = new FormData()
     formData.append('fistname',firstName)
     formData.append('lastname',lastName )
     formData.append('mobailnumber',mobailNumber )
     formData.append('password',password )
     formData.append('email',email )
     formData.append('picture',picture.bytes )
   var response = await postData('admins/Register',formData)
   if (response.status) {
    Swal.fire({
      icon: 'success',
      title: 'Brand',
      text: response.message,
      toast: true
    })
  } 
  else
   {
    Swal.fire({
      icon: 'error',
      title: 'Brand',
      text: response.message,
      toast: true
    })
  }
}


  const handleSignin=()=>{
    navigate('/adminlogin')
  }

  const handlePicture = (event) => {
    setPicture({ bytes: event.target.files[0], filename: URL.createObjectURL(event.target.files[0]) })
  }
  return (
    <div className={useStyle.AdminRegister}>
        <Paper elevation={3} className={useStyle.AdminRegisterWrapper}>
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box  className={useStyle.AdminRegisterBox}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  onChange={(event)=>setFistName(event.target.value)}
                  required
                  fullWidth
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  onChange={(event)=>setLastName(event.target.value)}
                  label="Last Name"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  onChange={(event)=>setEmail(event.target.value)}
                  label="Email Address"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  onChange={(event)=>setMobailNumber(event.target.value)}
                  label="Mobail Number"
                  type="Number"
                  autoComplete="new-Mobail Number"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  onChange={(event)=>setPassword(event.target.value)}
                  label="Password"
                  type="password"
                  autoComplete="new-password"
                />
              </Grid>

              <Grid item xs='6'>
            <Button component="label" fullWidth variant="contained"  >
              USER PICTURE
              <input onChange={handlePicture} hidden type="file"/>
            </Button>
          </Grid>
          <Grid item xs='6' className={useStyle.center} >
           <Avatar src={picture.filename} alt="Brand" variant="rounded" /> 
          </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid  sx={{marginRight:'50px'}} item>
              Already have an account?<Button onClick={handleSignin}> Sign in</Button> 
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
