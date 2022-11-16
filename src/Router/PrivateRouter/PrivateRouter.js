import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Spinner from 'react-bootstrap/Spinner';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    let location = useLocation()

    if (loading) {
        return <Spinner className='d-flex mx-auto' animation="grow" variant="success" />
    }

    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>


};

export default PrivateRoute;