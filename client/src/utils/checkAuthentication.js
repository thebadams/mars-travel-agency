import axios from 'axios';

const checkAuthentication = async () => {
    const sessionData = await axios.get('/auth/session')
    if(sessionData.data.loggedIn === true) {
      return sessionData.data
    } else {
      throw Error()
    }

  }

export default checkAuthentication;
