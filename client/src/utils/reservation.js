import axios from 'axios';
import { useAppStateContext } from './GlobalContext';

const addReservation = async () => {
  
  // get user from globalcontext? 
  const [state, dispatch ] = useAppStateContext();
  if (state.loggedIn) {
    const reservation = await axios.post('/api/reservation')
    dispatch({type: "ADD_RESERVATION", value: reservation })
    
  }

  // once we get user object from logged in session
  // push reservation created into reservation array
  // export to globalcontext

};

export default addReservation;



