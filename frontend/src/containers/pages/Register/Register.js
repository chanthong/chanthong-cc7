import React, { useState } from 'react';
import axios from "../../../config/axios";
import { withRouter } from "react-router-dom";
import LocalStorageService from '../../../services/localStorage';

// MUI

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
   paper: {
     marginTop: theme.spacing(8),
     display: 'flex',
     flexDirection: 'column',
     alignItems: 'center',
   },
   avatar: {
     margin: theme.spacing(1),
     backgroundColor: theme.palette.secondary.main,
   },
   form: {
     width: '100%', // Fix IE 11 issue.
     marginTop: theme.spacing(3),
   },
   submit: {
     margin: theme.spacing(3, 0, 2),
   },
 }));
 
function Register(props) {
   const classes = useStyles();

   const [username, setUsername] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");
  

   const onFinish = async() => {
      const userData = { username, password, email };
      await axios.post("/users/register", userData)

         .then(res => {
            alert("Signup successfully");
            props.history.push("/");
         })
         .catch(err => {
            alert("Something went wrong.");
         });

         await axios.post("/users/login", {
            username,
            password
        })
            .then(res => {
                alert("Login success.");
                LocalStorageService.setToken(res.data.token);
                props.setRole("USER");
            })
            .catch(err => {
                alert("Login failed.");
            });
         
   };

   const userNameHandler = (even) => {
      setUsername(even.target.value);
   }

   const emailHandler = (even) => {
      setEmail(even.target.value);
   }

   const passwordHandler = (even) => {
      setPassword(even.target.value);
   }

   const confirmPasswordHandler = (even) => {
      setConfirmPassword(even.target.value);
   }


   return (
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="userName"
                label="UserName"
                name="userName"
                autoComplete="userName"
                value={username}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirm-password"
                label="confirm-Password"
                type="confirm-password"
                id="confirm-password"
                autoComplete="current-password"
                value={confirmPassword}
              />
            </Grid>
            {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid> */}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
   )
}

export default withRouter(Register);
