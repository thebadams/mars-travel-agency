import React, { useState } from 'react';
import styled from "styled-components";
import Bookings from '../components/Bookings';
import Ticket from '../components/TicketComponents/ticket';
import Img from '../assets/img/mars.jpg';
import axios from 'axios';
import { useAppStateContext } from '../utils/GlobalContext';


const BookingStyle = styled.div`
  background-image: url(${Img});
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 100vw;
  height: 100vh;
`;

const Booking = () => {

  const [state, dispatch ] = useAppStateContext();
  

  const handleSearch = async (queryString) => {
    const result = await axios.get(queryString)
    return result.data;
  }


  return (
      <BookingStyle>
          <div>
            <Bookings />
  
            { state.showTickets ? <Ticket flights={state.flights}/> : null }
          </div>
      </BookingStyle>
  )
};

export default Booking;
