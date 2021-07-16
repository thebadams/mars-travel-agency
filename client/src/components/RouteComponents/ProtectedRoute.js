import React, {useContext} from  'react';
import { Route, Redirect} from 'react-router-dom';
import {useAppStateContext} from '../../utils/GlobalContext'
import Loading from './Loading';

const ProtectedRoute = ({component: Component, ...props}) => {
  const [{loggedIn, isLoading}, dispatch] = useAppStateContext()
const redirectTo = props.redirectto
return (
        <Route
            {...props}
            render={props2 => (
                !isLoading
                    ?
                    (
                        loggedIn
                            ?
                            <Component {...props2} />
                            :
                            <Redirect to='/login' />
                    )
                    :
                    <Loading />
            )}
        />
    )

}

export default ProtectedRoute;