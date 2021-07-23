import React, {useEffect} from "react";

import Confirm from "../components/ConfirmationComponents/Confirm"
import { useAppStateContext } from "../utils/GlobalContext";




const Confirmation = () => {
const [state, dispatch] = useAppStateContext()
  useEffect(()=> {
    dispatch({type: 'SET_SUCCESS', value: true})
    dispatch({type: 'SET_MESSAGE', value: 'Successfully Added Reservation'})
    dispatch({type: 'TOGGLE_MESSAGE_CONTAINER', value: true})
    }
     )
  return (
     <Confirm/>
  )
};

export default Confirmation;