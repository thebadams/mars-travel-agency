import axios from 'axios';

const reservation = async (state, dispatch) => {
  if(state.loggedIn) {
    const reservation = await axios.post('/api/reservation');
    return reservation.data;
  }
};

export default reservation;