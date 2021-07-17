import axios from 'axios';

const reservation = async (state, dispatch) => {
  if(state.loggedIn) {
    const reservation = await axios.post('/api/reservation');
    dispatch({type: "ADD_RESERVATION", value: reservation})
  }
};

export default reservation;