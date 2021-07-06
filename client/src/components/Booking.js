import React from "react";
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, RadioGroup, FormControlLabel, Radio, TextField, Fab } from '@material-ui/core';

const BookingStyle = styled.div`
.hero {
  background-color: white;
  color: black;
}

.depart, 
.return {
  position: absolute;
  padding: 0;
  border: 0;
}

.booking-button {
  padding: 10px 80px;
  margin: 5px 0;
}

.from, 
.to,
.depart-field,
.return-field  {
  padding-right: 15px;
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

const Booking = () => {

const [passenger, setPassenger] = React.useState('1');
const handleChange = (event) => {
  setPassenger(event.target.value);
};

return (
    <BookingStyle>
      <div className="hero">
        <Container maxWidthMd>
          <h1 className="hero_heading">Book</h1>
          <div>
            <Fab
                variant="extended"
                size="medium"
                color="primary"
                aria-label="add"
              >
                Flight
              </Fab>
          </div>
          <FormControl component="fieldset">
            <RadioGroup aria-label="booking" name="booking" row>
              <FormControlLabel value="round-trip" control={<StyledRadio />} label="Round Trip" labelPlacement="top"/>
              <FormControlLabel value="one-way" control={<StyledRadio />} label="One-Way" labelPlacement="top"/>
            </RadioGroup>
          </FormControl>
          <form noValidate autoComplete="off">
            <TextField id="outlined-basic" label="From" variant="outlined" className="from"/>
            <TextField id="outlined-basic" label="To" variant="outlined" className="to"/>
            <TextField
              id="outlined-select-passenger-native"
              select
              label="Number of passengers"
              value={passenger}
              onChange={handleChange}
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
          </form>
          <form noValidate autoComplete="off">
            <span className="depart">Depart</span>
            <TextField id="outlined-basic" label="mm/dd/yyyy" variant="outlined" className="depart-field"/>
            <span className="return">Return</span>
            <TextField id="outlined-basic" label="mm/dd/yyyy" variant="outlined" className="return-field"/>
            <Button variant="contained" color="primary" className="booking-button">Search</Button>
          </form>
        </Container>
      </div>
    </BookingStyle>
  );
};

export default Booking;