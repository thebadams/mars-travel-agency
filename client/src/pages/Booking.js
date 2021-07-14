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
  
  return (
      <BookingStyle>
          <Bookings />
          <Ticket />
      </BookingStyle>
  )
};

export default Booking;