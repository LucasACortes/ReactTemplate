import React from 'react';
import { Redirect, Route } from "react-router-dom";

export default function PrivateRoute({ component, authenticated, ...rest }) {
    return (
        <Route
        {...rest}
        render={({ location }) =>
            authenticated ? (
                component()
            ) : (
            <Redirect
                to={{
                pathname: "/login",
                state: { from: location }
                }}
            />
            )
        }
        />
    );
}