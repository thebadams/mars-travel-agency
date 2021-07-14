import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import CardContent from '@material-ui/core/CardContent';

import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import MoreVertIcon from '@material-ui/icons/MoreVert';

const randomColor = Math.floor(Math.random()*16777215).toString(16);
const color = "#" + randomColor

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    maxHeight: 500,
  },
  avatar: {
    backgroundColor: color,
  },
}));

const ProfileCard = (props) => {
  const classes = useStyles();

  const firstNameInitial = props.firstName.split('');
  const firstInitial = firstNameInitial.shift().charAt(0);
  // const lastNameInitial = props.lastName.split('');
  // const lastInitial = lastNameInitial.shift().charAt(0);
  let dateOptions =  {  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  let today = new Date().toLocaleTimeString('en-us', dateOptions);

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {firstInitial}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }

        title={props.firstName + props.lastName}
        subheader={today}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
     
    </Card>
  );
}

export default ProfileCard;