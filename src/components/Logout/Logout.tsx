import React from 'react'
import { logout } from '../../constants/images'
//import { useAppDispatch } from '../../hooks'

const Logout = () => {

    //dispatch = useAppDispatch();

    const handleLogout = () => {
        // dispatch()
    }

    return (
        <div onClick={handleLogout}>
            <img src={logout}/>
        </div>
    )
}

export default Logout
