import axios from 'axios';

const getSession = async (dispatch, state) => {
    const sessionData = await axios.get('/auth/session')
    console.log(sessionData.data)
    if(sessionData.data.loggedIn){
      dispatch({type:'LOG_IN', value: sessionData.data.user})
    }
    console.log(state)
  }

export default getSession;
