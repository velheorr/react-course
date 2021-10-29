import React, {useContext} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {publicRoutes, privateRoutes} from "../router/routes";
import {AuthContext} from "../context/context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)
    console.log(isAuth)
    if (isLoading){
        return <Loader/>
    }

    return (
        isAuth
            ?
                <Switch>
                    {privateRoutes.map(r =>
                        <Route
                            component={r.component}
                            path={r.path}
                            exact={r.exact}
                            key={r.path}
                        />
                    )}
                    <Redirect to='/posts'/>
                </Switch>
            :
                <Switch>
                    {publicRoutes.map(r =>
                        <Route
                            component={r.component}
                            path={r.path}
                            exact={r.exact}
                            key={r.path}
                        />
                    )}
                    <Redirect to='/login'/>
                </Switch>

    );
};

export default AppRouter;