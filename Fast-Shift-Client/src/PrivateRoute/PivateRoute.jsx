import React from 'react';
import useAuth from '../CustomHooks/useAuth';
import { Navigate, useNavigate } from 'react-router';

const PivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    if(loading){
        return <p>Loading....</p>
    }
    if(!user){
        return <Navigate to={'/login' }></Navigate>
    }
    return ({children});
};

export default PivateRoute;