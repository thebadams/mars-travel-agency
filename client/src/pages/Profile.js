import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import ProfileTicket from "../components/ProfileComponents/ProfileTicket";
import ProfileCard from "../components/ProfileComponents/ProfileCard"


const ProfileStyle = styled.div`
    
`;

const Profile = () => {
  return (  
    <Grid container>
      <Grid item xs={4}>
      </Grid>
      <Grid item xs={6}>
        <Paper>
          <ProfileCard />
          <ProfileTicket />
        </Paper>
      </Grid>
      <Grid item xs={4}>
        
        </Grid>
    </Grid>
  
  )
};

export default Profile;