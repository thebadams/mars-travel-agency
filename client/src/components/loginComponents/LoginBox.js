import React from "react";
import { Link } from "react-router-dom";
//Material ui components
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import FacebookButton from "./FacebookButton";

import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import styled from "styled-components";


import axios from 'axios'

//context
import { useAppStateContext } from '../../utils/GlobalContext'


const MobileStyle= styled.div `
/* Smartphones (portrait and landscape) ----------- */
@media only screen 
and (min-device-width : 320px) 
and (max-device-width : 480px) {
/* Styles */
background-color: red;
height:100vh;
}

`

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


const LoginBox = () => {
  const classes = useStyles();
  const [state, dispatch] = useAppStateContext();

  const handleLogin = async (e) => {
    e.preventDefault()
    const body = {
      email: document.querySelector('#email').value,
      password: document.querySelector('#password').value
    }
    console.log(body)
  const response = await axios.post('/auth/local/login', body)
  console.log(response)
  dispatch({
    type: 'LOG_IN',
    value: response.data
  })
}

  return (
    <Container className={classes.container} component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
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
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleLogin}
          >
            Sign In
          </Button>
          <Grid 
            container  
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >
          <Grid item xs={6}>
              <FacebookButton/>
            </Grid>
            <Grid item xs={6}>
              <Link to="/signup" style={{textDecoration: "none"}}>Don't have an account, Sign Up here!</Link>
            </Grid>

          </Grid>
        </form>

      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

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
    marginTop: theme.spacing(1),
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
    zIndex: "auto",
    borderRadius: "44px",
    background: "linear-gradient(145deg, #04d1db, #04f8ff)",
    boxShadow: "20px 20px 60px #03c5cf, -20px -20px 60px #05ffff",
  },
  button: {
    width: "140px",
    height: "40px",
    justifyContent: "space-around",
  },
  copyRight: {
color: "red",
marginTop: "50px",


},
}));

export default LoginBox;
