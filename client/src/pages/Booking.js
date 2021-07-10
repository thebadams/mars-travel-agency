import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Bookings from '../components/Bookings';
import Ticket from '../components/TicketComponents/ticket';
import Img from '../assets/img/mars.jpg';
import axios from 'axios';

const BookingStyle = styled.div`
  background-image: url(${Img});
  background-position: center;
  width: 100vw;
  height: 100vh;
`;

const Booking = () => {

  const [flightState, setFlightState] = useState([])

  useEffect(() => {
    axios.get(`/api/booking`)
    .then(res => {
      const flights = res.data;
      setFlightState(flights);
      console.log(res);
    })
  },[])
  
  return (
      <BookingStyle>
          {/* <ul>
            { flightState.map(flight => <li>{flight.aircraftType}</li>)}
          </ul> */}
          <Bookings />
          <Ticket />
      </BookingStyle>
  )
};

export default Booking;