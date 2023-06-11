import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loader} = useContext(AuthContext)
    const location = useLocation()

    if(user){
        return children
    }
    if(loader){
        return<button className="btn btn-square">
        <span className="loading loading-spinner"></span>
      </button>
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
        
    
};

export default PrivateRoute;