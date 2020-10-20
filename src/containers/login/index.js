import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sessionActions } from '../../store';

export default function Login() {
    const dispatch = useDispatch();
    const authenticated = useSelector(state => state.session.authenticated);

    const autenticar = () => {
        dispatch(sessionActions.authenticated(true));
    }

    return (
        <p> Login </p>
    );
}