import React, {useContext} from  'react';
import { Route, Redirect} from 'react-router-dom';
import {useAppStateContext} from '../../utils/GlobalContext'
import Loading from './Loading';

const LoggedOutProtectedRoute = ({component: Component, ...props}) => {
  const [{loggedIn, isLoading}, dispatch] = useAppStateContext()
return (
        <Route
            {...props}
            render={props2 => (
                !isLoading
                    ?
                    (
                        !loggedIn
                            ?
                            <Component {...props2} />
                            :
                            <Redirect to='/profile' />
                    )
                    :
                    <Loading />
            )}
        />
    )

}

export default LoggedOutProtectedRoute;