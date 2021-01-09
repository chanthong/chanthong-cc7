import React, { useState } from 'react';
import '../PartnerRegister/PartnerRegister.css';
import axios from "../../../config/axios";
import { withRouter } from "react-router-dom";

import PlateImg from '../../uploadfile/dishelement.png';
import RegisterImg from '../../uploadfile/register.png';
import jwtDecode from 'jwt-decode';
import LocalStorageService from '../../../services/localStorage';
import { BASE_BACKEND_URL } from '../../../config/constants';
import { UploadOutlined } from '@ant-design/icons';

//MUI
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
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

function PartnerRegister(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [restaurant_name, setRestaurant_name] = useState("");
    const [phone_number, setPhone_number] = useState("");
    const [email_address, setEmail_address] = useState("");
    const [price_range, setPrice_range] = useState("");
    const [address, setAddress] = useState("");
    const [district, setDistrict] = useState("");
    const [province, setProvince] = useState("");
    const [category, setCategory] = useState("");
    const [theme, setTheme] = useState("");
    const [description, setDescription] = useState("");
    const [partners_picture, setFileName] = useState("")

    const usernameHandler = (e) => {
        setUsername(e.target.value);
    };
    const passwordHandler = (e) => {
        setPassword(e.target.value);
    };
    const restaurant_nameHandler = (e) => {
        setRestaurant_name(e.target.value);
    };
    const phone_numberHandler = (e) => {
        setPhone_number(e.target.value);
    };
    const email_addressHandler = (e) => {
        setEmail_address(e.target.value);
    };
    const price_rangeHandler = (e) => {
        setPrice_range(e.target.value);
    };
    const addressHandler = (e) => {
        setAddress(e.target.value);
    };
    const districtHandler = (e) => {
        setDistrict(e.target.value);
    };
    const provinceHandler = (e) => {
        setProvince(e.target.value);
    };
    const categoryHandler = (e) => {
        setCategory(e.target.value);
    };
    const themeHandler = (e) => {
        setTheme(e.target.value);
    };
    const descriptionHandler = (e) => {
        setDescription(e.target.value);
    };

    const onFinish = async () => {
        console.log("Comein");
        await axios.post("/partners/register", { username, password, restaurant_name, email_address, phone_number, price_range, address, district, province, partners_picture })
            .then(res => {
                alert("Signup successfully!!");
            })
            .catch(err => {
                console.log(err);
                alert("Something went wrong.");
            });

        await axios.post("/partners/login", {
            username,
            password
        })
            .then(res => {
                alert("Login success.");
                LocalStorageService.setToken(res.data.token);
                LocalStorageService.setARole(res.data.role);
                // console.log(res.data);
                // console.log(jwtDecode(res.data.token));
                props.setRole("PARTNER");
                props.setPartner(jwtDecode(res.data.token));
            })
            .catch(err => {
                console.log(err);
                alert("Login failed.");
            });

        await axios.post(`/partner_category/${category}`)
            .then(res => {
                alert("Category successfully!!");
            })
            .catch(err => {
                alert("Failed Partner_category.");
            })
        await axios.post(`/partner_category/${theme}`)
            .then(res => {
                alert("Category successfully!!");
            })
            .catch(err => {
                    alert("Failed Partner_category.")
            })
        props.history.push("/partner_profile");
    };

    // const propsUpload = {
    //     name: 'img',
    //     multiple: false,
    //     action: `${BASE_BACKEND_URL}/uploads/`,
    //     onChange(info) {
    //         const { status } = info.file;
    //         if (status !== 'uploading') {
    //             console.log(info.file, info.fileList);
    //         }
    //         if (status === 'done') {
    //             setFileName(info.file.response.url);
    //             message.success(`${info.file.name} file upload successfully.`);
    //         } else if (status === "error") {
    //             message.error(`${info.file.name} file upload failed.`)
    //         }
    //     },
    // };
    const classes = useStyles();

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
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
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
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
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

export default withRouter(PartnerRegister);