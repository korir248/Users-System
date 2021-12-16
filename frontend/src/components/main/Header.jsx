import React from 'react'
// import { useSelector } from 'react-redux'
import { Link} from 'react-router-dom'

const Header = () => {

    // const {user} = useSelector(state => state.user)
    // console.log(user);

    return (
        <div>
            <div className="header">
                <p className="header-txt">User System</p>
                <p><Link to="/">Back to home</Link></p>
            </div>
        </div>
    )
}

export default Header
