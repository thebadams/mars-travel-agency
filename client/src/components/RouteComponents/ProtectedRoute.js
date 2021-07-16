import React, {useContext} from  'react';
import { Route, Redirect} from 'react-router-dom';
import {AppStateContext} from '../../utils/GlobalContext'
import Loading from './Loading';
const PrivateRoute = ({component: Component, ...props}) => {
  const [{loggedIn, isLoading}, dispatch] = useContext(AppStateContext)

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
                            <Redirect to='/' />
                    )
                    :
                    <Loading />
            )}
        />
    )

}

export default PrivateRoute;