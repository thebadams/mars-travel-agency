import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
import { lineAnim } from '../animation';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '5%',
    minHeight:'260px',
  },
  paper: {
    borderRadius: '12px',
    lineHeight: '50px',
    textAlign: 'center',
    verticalAlign: 'middle',
    color: 'white',
    // height: 210,
    width: 140,
    opacity: '0.65',
    background: 'black',
  },
  line: {
    height: '0.3rem',
    width: '50%',
    marginLeft: '25%',
    background: 'white',
  }
}));



export default function WeatherCard() {
  const [spacing, setSpacing] = React.useState(5);
  const classes = useStyles();
  const [date,setDate] = useState(22)
  const [solDate, setSolDate]= useState(3157)

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
          <div>
            <Grid container className={classes.root}>
            <Grid item xs={12} >
                <Grid container spacing={spacing} className={classes.cardContainer} >
                {[0, 1, 2, 3, 4, 5, 6].map((value) => (
                    <Grid key={value} item>
                    <Paper  className={classes.paper}>
                    <h2>Sol {solDate + value}</h2>
                    <h2>July {date + value}</h2>
                    <motion.div variants={lineAnim} className={classes.line}></motion.div>
                    <h2>High: -13F</h2>
                    <h2>Low: -108F</h2>
                    </Paper>
                    </Grid>
                ))}
                </Grid>
            </Grid>
            </Grid>
        </div>
  );
}