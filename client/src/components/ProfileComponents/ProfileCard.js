import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { useAppStateContext } from "../../utils/GlobalContext";

const randomColor = Math.floor(Math.random()*16777215).toString(16);
const color = "#" + randomColor

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "10%",
    maxWidth: 600,
    maxHeight: 500,
  },
  avatar: {
    backgroundColor: color,
  },
  text: {
    fontWeight: "bold",
  }
}));

const ProfileCard = () => {
  const classes = useStyles();
  const [state, dispatch] = useAppStateContext();
console.log(state.user.lastName);

  const firstNameInitial = state.user.firstName.split('');
  const firstInitial = firstNameInitial.shift().charAt(0);
  const lastNameInitial = state.user.lastName.split('');
  const lastInitial = lastNameInitial.shift().charAt(0);
  let dateOptions =  {  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  let today = new Date().toLocaleTimeString('en-us', dateOptions);
    return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {`${firstInitial}${lastInitial}`}
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }

        title={`${state.user.firstName} ${state.user.lastName}`}
        subheader={today}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
          Below Is Your Ticket, please make sure to save a screenshot of your ticket to show at the flight terminal. The future is now, welcome aboard!
        </Typography>
      </CardContent>
     
    </Card>
  );
 
  
  
}

export default ProfileCard;