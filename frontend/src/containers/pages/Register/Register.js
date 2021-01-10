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
  const [name, setName] = useState("");
  const [lname, setLname] = useState("");
  const [birth_date, setBirthDATE] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [profile_url, setProfile] = useState("");



  const onFinish = async (event) => {
    event.preventDefault();

    const userData = { username, password, email, name, lname, birth_date, phone_number, gender };
    await axios.post("/users/register", userData)

      .then(res => {
        alert("Signup successfully");
        props.history.push("/login");
      })
      .catch(err => {
        alert("Something went wrong.");
      });
  };

  const userNameHandler = (event) => {
    setUsername(event.target.value);
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const confirmPasswordHandler = (event) => {
    setConfirmPassword(event.target.value);
  };

  const firstNameHandler = (event) => {
    setName(event.target.value);
  };

  const lastNameHandler = (event) => {
    setLname(event.target.value);
  };

  const birthDateHandler = (event) => {
    setBirthDATE(event.target.value);
  };

  const phoneNumberHandler = (event) => {
    setPhoneNumber(event.target.value);
  };

  const genderHandler = (event) => {
    setGender(event.target.value);
  };

  const profileHandler = (event) => {
    setProfile(event.target.value);
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
        <form className={classes.form} onSubmit={onFinish} noValidate>
          <Grid container spacing={2}>

            {/* USERNAME INPUT */}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                value={username}
                onChange={userNameHandler}
              />
            </Grid>

            {/* PASSWORD INPUT */}
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
                onChange={passwordHandler}
              />
            </Grid>

            {/* CONFIRM PASSEORD INPUT */}
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

            {/* EMAIL INPUT */}
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
                onChange={emailHandler}
              />
            </Grid>

            {/* NAME INPUT */}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="firstName"
                label="First Name"
                id="firstName"
                value={name}
                onChange={firstNameHandler}
              />
            </Grid>

            {/* LAST_NAME INPUT */}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="lastName"
                label="Last Name"
                id="lastName"
                value={lname}
                onChange={lastNameHandler}
              />
            </Grid>

            {/* BIRTH_DATE INPUT */}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="birthDate"
                label="Birth Date"
                id="birthDate"
                value={birth_date}
                onChange={birthDateHandler}
              />
            </Grid>

            {/* PHONE_NUMBER INPUT */}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="phoneNumber"
                label="Phone Number"
                id="phoneNumber"
                value={phone_number}
                onChange={phoneNumberHandler}
              />
            </Grid>

            {/* GENDER INPUT */}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="gender"
                label="Gender"
                id="gender"
                value={gender}
                onChange={genderHandler}
              />
            </Grid>

            {/* PROFILE_URL INPUT */}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="profile"
                label="Your profile"
                id="profile_url"
                value={profile_url}
                onChange={profileHandler}
              />
            </Grid>

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
