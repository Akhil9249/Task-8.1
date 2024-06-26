import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
    const {auth}=useContext(AuthContext)

    console.log("ProtectedRoute");

      //Evide api call vilichanu pothuve check cheyyunnathu

    if (!auth) {
      console.log(" inside auth8888888888888888888888888888888888888");
        return <Navigate to="/"/>
    }
    console.log("retueee...................",auth);
  // return <Outlet/>
}

export default ProtectedRoute
