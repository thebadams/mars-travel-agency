import axios from 'axios';

const reservation = async (state, dispatch) => {
  if(state.loggedIn) {
    const reservation = await axios.post('/api/reservation', {})
    //pass in extra information as an object {flight: flightIDNumber numtickets: 1, partyNum, name: state.user._id, };
    return reservation.data;
  }
};

export default reservation;