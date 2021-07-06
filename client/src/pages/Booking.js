import React from "react";
import styled from "styled-components";
import Bookings from '../components/Bookings'

const BookingStyle = styled.div`
  background-color: white;
`;

const Booking = () => {
  return (
      <BookingStyle>
          <Bookings />
      </BookingStyle>
  )
};

export default Booking;