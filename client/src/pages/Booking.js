import React, { useState } from 'react';
import styled from "styled-components";
import Bookings from '../components/Bookings';
import Ticket from '../components/TicketComponents/ticket';
import Img from '../assets/img/mars.jpg';


const BookingStyle = styled.div`
  background-image: url(${Img});
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 100vw;
  height: 100vh;
`;

const Booking = () => {
  const [showTickets, setShowTickets] = useState(false);
  const onClick = () => setShowTickets(true)

  return (
      <BookingStyle>
          <div>
            <Bookings onClick={onClick} />
            { showTickets ? <Ticket /> : null }
          </div>
      </BookingStyle>
  )
};

export default Booking;
