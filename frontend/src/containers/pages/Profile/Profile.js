import React, { useState } from 'react'
//MUI
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import {
    Box,
    Button,
    ButtonGroup,
    IconButton,
    InputLabel,
    MenuItem,
    Select,
    FormControl,
    TextField
} from '@material-ui/core';
import DataTable from '../../../components/DataTable/DataTable';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    large: {
        width: theme.spacing(25),
        height: theme.spacing(25),
    },
    tabs: {
        color: 'blue',
        fontWeight: 'bold',
    },
    textBox: {
        display: 'flex',
        alignItems: 'center',
    },
    input: {
        display: 'none',
    },
    formArea: {
        display: 'flex',
        flexDirection: 'column',
        width: '50%'
    },
    formControl: {
        width: '100%'
    },
    inputBox: {
        marginTop: '10px'
    }
}));


function Profile({ user: { name, lname, gender, birth_date, username, email, phone_number } }) {
    const classes = useStyles();
    const [page, setPage] = useState(0);

    const [userName, setUsername] = useState(username);
    const [firstName, setFirstName] = useState(name);
    const [lastName, setLastName] = useState(lname);
    const [sex, setSex] = useState(gender);
    const [mail, setMail] = useState(email);
    const [phone, setPhone] = useState(phone_number);
    const [pwd, setPwd] = useState("12345678");
    // const [birthday, setBirthday] = useState(birth_date);

    const handleChange = (event) => {

        setSex(event.target.value);

    };
    const handlePage = (idx) => {
        setPage(idx);
    }
    return (
        <Container maxWidth="lg" style={{ marginTop: '80px' }}>
            {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}
            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <Paper className={classes.paper} elevation={0}>
                        {/* <Typography variant="h5" gutterBottom>
                            Profile
                        </Typography> */}
                        <Avatar
                            alt="Remy Sharp"
                            src="https://source.unsplash.com/random"
                            className={classes.large}
                        />
                        <div>
                            <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                            <label htmlFor="icon-button-file">
                                <IconButton color="primary" aria-label="upload picture" component="span">
                                    <PhotoCamera />
                                </IconButton>
                            </label>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={9}>
                    {/* <Box>
                        <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                            <Button onClick={() => handlePage(0)}>profile</Button>
                            <Button onClick={() => handlePage(1)}>reserve</Button>
                        </ButtonGroup>
                    </Box> */}
                    <Box style={{ marginLeft: '50px' }}>
                        <Box style={{ marginTop: '10px' }}>
                            <form noValidate>
                                <div className={classes.formArea}>
                                    <TextField id="fname" label="Name" value={firstName} className={classes.inputBox} />
                                    <TextField id="lname" label="Last Name" value={lastName} className={classes.inputBox} />
                                    <FormControl className={classes.inputBox}>
                                        <InputLabel id="gender-label">Gender</InputLabel>
                                        <Select
                                            labelId="gender-label"
                                            id="gender-simple-select"
                                            value={sex}
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={'male'}>Male</MenuItem>
                                            <MenuItem value={'female'}>Female</MenuItem>
                                            <MenuItem value={'other'}>Other</MenuItem>
                                        </Select>
                                    </FormControl>
                                    {/* <TextField id="birth-day" label="Birth day" value={birthday} type="date" className={classes.inputBox} /> */}
                                </div>
                            </form>
                        </Box>
                        <Box style={{ marginTop: '10px', width: '100%', height: '2px', background: 'gray' }} />
                        <form noValidate>
                            <div className={classes.formArea}>
                                <TextField id="user-name" label="Username" value={userName} className={classes.inputBox} />
                                <TextField id="password" label="Password" value={pwd} type="password" className={classes.inputBox} />
                                <TextField id="email" label="Email" value={mail} className={classes.inputBox} />
                                <TextField id="phone" label="Phone" value={phone} className={classes.inputBox} />
                            </div>
                        </form>
                    </Box>
                </Grid>
            </Grid>
            <Grid container >
                <Grid item xs={12}>
                    <Typography variant="h5">
                        My History
                    </Typography>
                    <DataTable/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Profile