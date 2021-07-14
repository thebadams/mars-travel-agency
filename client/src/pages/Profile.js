import React, {useEffect} from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import ProfileTicket from "../components/ProfileComponents/ProfileTicket";
import ProfileCard from "../components/ProfileComponents/ProfileCard"
import { useAppStateContext } from "../utils/GlobalContext";
import axios from 'axios'
import getSession from "../utils/getSession";

const ProfileStyle = styled.div`
    
`;

const Profile = () => {
  const [state, dispatch] = useAppStateContext();
  
  useEffect(()=> {
    if(!state.loggedIn) {
      getSession(dispatch)
    }
    
    console.log()
  }, [])

  
  return (  
    <Grid container>
      <Grid item xs={4}>
      </Grid>
      <Grid item xs={6} md={4}>
        <Paper>
          <ProfileCard name={state.user.firstName} />
          <ProfileTicket />
        </Paper>
      </Grid>
      <Grid item xs={4}>
        
        </Grid>
    </Grid>
  
  )
};

export default Profile;