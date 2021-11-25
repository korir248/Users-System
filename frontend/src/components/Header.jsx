import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {

    const {user} = useSelector(state => state.user)
    console.log(user);

    return (
        <div>
            <div className="header">
                <p>User System</p>
            </div>
        </div>
    )
}

export default Header
