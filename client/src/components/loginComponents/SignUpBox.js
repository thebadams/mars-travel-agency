import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import FacebookButton from "./FacebookButton";
import { Link } from "react-router-dom";

import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import axios from 'axios';
import {useAppStateContext} from '../../utils/GlobalContext'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <a href="https://github.com/thebadams/mars-travel-agency" target="_blank" rel="noreferrer">
        Mars Travel Agency
      </a>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  container: {
    position: "absolute",
    marginLeft: "auto",
    marginRight: "auto",
    left: "0",
    right: "0",
    textAlign: "center",
    border: "1px solid #54a7a8",
    height: "80%",
    opacity: ".8",
    zIndex: "2",
    borderRadius: "44px",
    background: "linear-gradient(145deg, #04d1db, #04f8ff)",
    boxShadow: "20px 20px 60px #03c5cf, -20px -20px 60px #05ffff",
  },
  button: {
    width: "140px",
    height: "40px",
    justifyContent: "space-around"
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [state, dispatch] = useAppStateContext()
  const handleRegister = async (e) => {
    e.preventDefault();
    const body = {
      email: document.querySelector('#email').value,
      firstName: document.querySelector('#firstName').value,
      lastName: document.querySelector('#lastName').value,
      password: document.querySelector('#password').value
    }
    try {
      const response = await axios.post('/auth/local/register', body)
      dispatch({type: 'SET_SUCCESS', value: true})
    dispatch({type: 'SET_MESSAGE', value: 'Successfully Registered'})
    dispatch({type: 'TOGGLE_MESSAGE_CONTAINER', value: true})
    dispatch({
      type: 'LOG_IN',
      value: response.data
    })
      
    } catch (error) {
      dispatch({type: 'SET_SUCCESS', value: false})
    dispatch({type: 'SET_MESSAGE', value: 'There Was an error registering'})
    dispatch({type: 'TOGGLE_MESSAGE_CONTAINER', value: true})
    dispatch({
      type: 'LOG_OUT',
      value: {}
    })
    }
    

    //if response status = 200 then dispatch(LOGIN)
    //sets app state to LOGGED IN: true
    //sets current user to user that is returned in the response

    //logic run after registration
  }

  return (
    <Container className={classes.container} component="main" maxWidth="xs">
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
            onClick={handleRegister}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
          <Grid item xs={6}>
            <FacebookButton/>
            </Grid>
            <Grid item>
              <Link to="/login">Already have an account? Sign in</Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
