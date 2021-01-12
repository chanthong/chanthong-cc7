import React, { useContext } from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from '../../../config/axios';
import LocalStorageService from "../../../services/localStorage";
import jwtDecode from 'jwt-decode';
import UserContext from '../../../context/UserContext';

//MUI

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';

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
      marginTop: theme.spacing(1),
   },
   submit: {
      margin: theme.spacing(3, 0, 2),
   },
}));

function Login(props) {

   const classes = useStyles();

   const { setChange } = useContext(UserContext)

   const history = useHistory();

   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

   const onFinish = (event) => {
      event.preventDefault();

      axios.post("http://localhost:5555/users/login", {
         username,
         password
      })
         .then(res => {
            // alert("Login success.");
            <Alert severity="success">This is a success alert — check it out!</Alert>
            LocalStorageService.setToken(res.data.token);
            props.setRole("USER");
            props.setUser(jwtDecode(res.data.token));
            setChange(true);
            history.push('/');
         })
         .catch(err => {
            alert("Login failed.");
         });
   };


   const userNameHandler = (even) => {
      setUsername(even.target.value);
   }

   const passwordHandler = (even) => {
      setPassword(even.target.value);
   }



   return (
      <Container component="main" maxWidth="xs">
         <CssBaseline />
         <div className={classes.paper}>
            <Avatar className={classes.avatar}>
               <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
               Sign in
        </Typography>
            <form className={classes.form} onSubmit={onFinish} noValidate>

               {/* USERNAME INPUT */}
               <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  onChange={userNameHandler}
               />

               {/* PASSWORD INPUT */}
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
                  onChange={passwordHandler}
               />

               {/* SIGN IN BUTTON  */}
               <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
               >
                  Sign In
               </Button>

               <Grid container>
                  <Grid item xs>
                     {/* <Link href="#" variant="body2">
                        Forgot password?
                     </Link> */}
                  </Grid>
                  <Grid item>
                     <Link to="/register" variant="body2">
                        {"Don't have an account? Sign Up"}
                     </Link>
                  </Grid>
               </Grid>
               
            </form>
         </div>
      </Container>
   )
}

export default Login;
