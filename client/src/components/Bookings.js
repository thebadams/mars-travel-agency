import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, RadioGroup, FormControlLabel, Radio, TextField, Fab, Grid } from '@material-ui/core';
import clsx from 'clsx';
import axios from 'axios';
import { useAppStateContext } from "../utils/GlobalContext";

const BookingsStyle = styled.div`
  display: inline-block;

.hero {
  text-align: left;
  opacity: 0.9;
  border-radius: 25px;
  position: absolute;
  background-color: #dbd7d2;
  color: black;
  height: 345px;
  margin-right: auto;
  margin-left: auto;
  top: 20%;
  left: 50%;
  margin-left: -300px;
}

.hero_heading {
  margin-top: 2rem;
  margin-left: 1rem;
}

.flight {
  margin-bottom: 2rem;
}

.depart, 
.return {
  position: absolute;
  padding: 0;
  border: 0;
}

.booking-button {
  padding: 20px 100px;
  margin-left: 2rem;
  top: 0;
}

.passengers, .booking-button {
  margin-top: 2rem;
}

.from, 
.to,
.departure,
.depart,
.return-field  {
  padding-right: 15px;
}

.depart-field,
.return-field {
  margin-top: 1.5rem;
}
`;

const useStyles = makeStyles({
  root: {
    '&:hover': {
    backgroundColor: 'transparent',
    },
  },
  icon: {
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
    },
    'input:hover ~ &': {
    backgroundColor: '#ebf1f5',
    },
    'input:disabled ~ &': {
    boxShadow: 'none',
    background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: '#137cbd',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
    display: 'block',
    width: 16,
    height: 16,
    backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
    content: '""',
    },
    'input:hover ~ &': {
    backgroundColor: '#106ba3',
    },
  },
});


function StyledRadio(props) {
const classes = useStyles();

return (
<Radio className={classes.root} disableRipple color="default" checkedIcon={<span className={clsx(classes.icon,
  classes.checkedIcon)} />}
icon={<span className={classes.icon} />}
{...props}
/>
);
}

const passengers = [
  {
    value: '1',
    label: '1',
  },
  {
    value: '2',
    label: '2',
  },
  {
    value: '3',
    label: '3',
  },
  {
    value: '4',
    label: '4',
  },
];


const Bookings = (props) => {
 
  // render tickets
const [state, dispatch ] = useAppStateContext();

// get flight data from backend
const [flightState, setFlightState] = useState([])
const [passenger, setPassenger] = React.useState('1');
const [bookingUrl, setBookingUrl ] = useState("/api/booking");

const handleInputChange = (event) => {
  console.log(event.target.value);
  const query = event.target.value;
  const basicString = "/api/booking";
  
  dispatch({type: "SET_SEARCH_URL", value: `${basicString}?departure=${query}`})
}


const handleChange = (event) => {
  setPassenger(event.target.value);
};



useEffect(() => {
  axios.get(`/api/booking`)
  .then(data => {
    const flights = data.data
    if(data.status === 200) {
      dispatch({type:'SET_SUCCESS', value: true})
      dispatch({type: 'SET_MESSAGE', value: 'Successfully Connected'})
      dispatch({type:'TOGGLE_MESSAGE_CONTAINER', value: true})
      setFlightState(flights);
    } else {
      dispatch({type:'SET_SUCCESS', value: false  })
      dispatch({type: 'SET_MESSAGE', value: 'Failure to Get Flight Data'})
      dispatch({type: 'TOGGLE_MESSAGE_CONTAINER', value: true})
    } 
    
    console.log(flights);
  })
},[])



return (
    <BookingsStyle>
      <Grid className="hero">
        <Container maxWidthLg>
          <h1 className="hero_heading">Book</h1>
          <div>
            <Fab
                variant="extended"
                size="medium"
                color="primary"
                aria-label="add"
                className="flight"
              >
                Flight
              </Fab>
              <FormControl component="fieldset">
                <RadioGroup aria-label="booking" name="booking" row>
                  <FormControlLabel value="one-way" control={<StyledRadio />} label="One-Way" labelPlacement="top"/>
                </RadioGroup>
              </FormControl>
          </div>
          <form noValidate autoComplete="off">
          <TextField
              id="outlined-select-passenger-native"
              select
              onChange={(event) => handleInputChange(event)}
              className="departure"
              SelectProps={{
                native: true,
              }}
              helperText="Please select your departure location"
              variant="outlined"
            >
              { flightState.map((flight) => (
                <option key={flight.flightNum} departure={flight.departure}>
                  {flight.departure}
                </option>
              ))}
            </TextField>
            <TextField id="outlined-basic" label="MARS" variant="outlined" className="to" disabled="disabled"/>
          </form>
          <form noValidate autoComplete="off">
          <TextField
              id="outlined-select-passenger-native"
              select
              value={passenger}
              onChange={handleChange}
              className="passengers"
              SelectProps={{
                native: true,
              }}
              helperText="Please select the number of passengers"
              variant="outlined"
            >
              {passengers.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
              <Button variant="contained" color="primary" className="booking-button" onClick={() => axios.get(state.searchURL).then((data) => dispatch({ type: "SET_FLIGHTS", value: data.data})).then(()=> dispatch({type: 'TOGGLE_SEARCH_BOX', value: false})).then(() => dispatch({ type: "TOGGLE_SEARCH_RESULTS", value: !state.showTickets}) )   }>Search</Button>
          </form>
        </Container>
      </Grid>
    </BookingsStyle>
  );
};

export default Bookings;