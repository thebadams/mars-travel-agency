import React, {useEffect} from "react";
import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import ProfileTicket from "../components/ProfileComponents/ProfileTicket";
import ProfileCard from "../components/ProfileComponents/ProfileCard"
import { useAppStateContext } from "../utils/GlobalContext";
import axios from 'axios';
import Earth from '../assets/img/Earth.jpg'

//StyleS
const ProfileStyle = styled.div`
background-image: url(${Earth});
`;



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '20%',
    marginBottom: '2%',
  },
  test:{
    background: 'red',
  },

}));


export default function Profile () {
  const classes = useStyles;
  const [state, dispatch] = useAppStateContext();
  const getSession = async () => {
    const sessionData = await axios.get('/auth/session')
    console.log(sessionData.data)
    if(sessionData.data.loggedIn){
      dispatch({type:'LOG_IN', value: sessionData.data.user})
    }
    console.log(state)
  }

  useEffect(()=> {
    getSession()
    console.log()
  }, [])

  
  return (  
    <ProfileStyle>
    <Grid container>
      <Grid item xs={4}>
      </Grid>
      <Grid item xs={6} md={4}>
        <Paper className={classes.test}>
          <ProfileCard name={state.user.firstName} />
          <ProfileTicket />
        </Paper>
      </Grid>
      <Grid item xs={4}>
        
        </Grid>
    </Grid>
    </ProfileStyle>
  
  )
};