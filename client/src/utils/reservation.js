import axios from 'axios';

const reservation = async (state, dispatch) => {
  //if(state.loggedIn) {
    // try {
      const reservation = await axios.post('/api/reservation', {})
      console.log('RESERVATION', reservation)
      if(reservation.status !== 200) {
        throw new Error()
      } else {
          return reservation.data
      }
    
    // } catch (error) {
    //   return {error:error, message: "Error Message:"}
    // }
    
    //pass in extra information as an object {flight: flightIDNumber numtickets: 1, partyNum, name: state.user._id, };
    console.log(reservation)
    if(reservation.status !== 200) {
      throw Error()
    }
    return reservation.data;
 // } else {
   // throw Error()
  //}
};

export default reservation;