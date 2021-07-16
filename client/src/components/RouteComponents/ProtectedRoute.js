import React, {useContext} from  'react';
import { Route, Redirect} from 'react-router-dom';
import {useAppStateContext} from '../../utils/GlobalContext'
import Loading from './Loading';

const ProtectedRoute = ({component: Component, ...props}) => {
  const [{loggedIn, isLoading}, dispatch] = useAppStateContext()

return (
        <Route
            {...props}
            render={props => (
                !isLoading
                    ?
                    (
                        loggedIn
                            ?
                            <Component {...props} />
                            :
                            <Redirect to={props.redirectto || '/login'} />
                    )
                    :
                    <Loading />
            )}
        />
    )

}

export default ProtectedRoute;