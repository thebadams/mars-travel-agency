import React, {useEffect} from "react";
import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import ProfileTicket from "../components/ProfileComponents/ProfileTicket";
import ProfileCard from "../components/ProfileComponents/ProfileCard"
import { useAppStateContext } from "../utils/GlobalContext";
import Earth from "../assets/img/Earth.jpg"

//StyleS

const ProfileBG = styled.div `
background-image: url(${Earth});
height: 100vh;
max-height: 100%;
background-repeat: no-repeat;
background-size: cover;
background-position: 100%;
padding-top: 5%;
`;

const ProfileStyle = styled.div`
.test {
  /* min-width: 625px; */
  /* background: rgba(0, 0, 0, 0.5);
  height: 25vh;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 25px; */
}

h1 {
  color: black;
  font-size: 350%;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}
`;



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '20%',
    marginBottom: '2%',
  },

}));


export default function Profile () {
  const classes = useStyles;
  const [state, dispatch] = useAppStateContext();

  
  return (  

    // todo: figure oput the xs and md for the grid i believe this is where the media class is
    <ProfileBG>
    <ProfileStyle>
      <Grid container >
        <Grid item xs={4}>
        </Grid>
        <Grid item xs={6} md={4}  className="test" >
        <h1>My Profile</h1>
            <ProfileCard />
            {state.user.reservations.length > 0 ? <ProfileTicket reservation={state.user.reservations[0]}/> : null}
        </Grid>
        <Grid item xs={4}>
          </Grid>
      </Grid>
    </ProfileStyle>
    </ProfileBG>
  
  )
};