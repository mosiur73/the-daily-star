import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation()
    console.log(location);
    
     
    if(loading){
        return <span className="loading loading-bars loading-lg"></span>
    }
    if(user && user?.email){
        return children
    }
    return <Navigate state={location.pathname} to={"/auth/login"}></Navigate>
    
};

export default PrivateRoutes;