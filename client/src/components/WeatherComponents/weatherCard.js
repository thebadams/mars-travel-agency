import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '10%',
    marginBottom: '2%',

  },
  paper: {
    height: 160,
    width: 150,
    opacity: '0.65',
  },
}));



export default function WeatherCard() {
  const [spacing, setSpacing] = React.useState(5);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
          <div className="hero">
            <Grid container className={classes.root}>
            <Grid item xs={12} >
                <Grid container spacing={spacing} className={classes.cardContainer} >
                {[0, 1, 2, 3, 4, 5, 6].map((value) => (
                    <Grid key={value} item>
                    <Paper  className={classes.paper}>
                    <h1>hello</h1>

                    </Paper>
                    </Grid>
                ))}
                </Grid>
            </Grid>
            </Grid>
        </div>
  );
}