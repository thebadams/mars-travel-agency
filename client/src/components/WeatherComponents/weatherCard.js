import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
}));

const WeatherCardStyle = styled.div`
    .hero {
        position: absolute;
        top: 80%;
        left: 20%;
        right: 20%;
        margin-top: -250px;
        margin-right: auto;
        margin-left: auto;
    }
`;

export default function WeatherCard() {
  const [spacing, setSpacing] = React.useState(5);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
      <WeatherCardStyle>
          <div className="hero">
            <Grid container className={classes.root} spacing={10} >
            <Grid item xs={12} >
                <Grid container justifyContent="center" spacing={spacing} >
                {[0, 1, 2, 3, 4, 5, 6].map((value) => (
                    <Grid key={value} item>
                    <Paper className={classes.paper}>
                    <h1>hello</h1>

                    </Paper>
                    </Grid>
                ))}
                </Grid>
            </Grid>
            </Grid>
        </div>
    </WeatherCardStyle>
  );
}