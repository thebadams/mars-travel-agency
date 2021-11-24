import axios from 'axios';

const reservation = async (state, dispatch, e) => {
  console.log(e.currentTarget.value);
  
  if(state.loggedIn) {
    const reservation = await axios.post('/api/reservation', {numTickets: 7, partyNum: 5, name: state.user._id, flight: e.currentTarget.value})
    //pass in extra information as an object {flight: flightIDNumber numtickets: 1, partyNum, name: state.user._id, };
    console.log(reservation)
    if(reservation.status !== 200) {
      throw Error()
    }
    return reservation.data;
  } else {
    throw Error()
  }
};

export default reservation;