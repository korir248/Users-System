import React from 'react'
// import { useDispatch,useSelector } from 'react-redux'
import { Link} from 'react-router-dom'
// import {logOut} from '../../redux/actions/userActions'

const Header = () => {
    // const {user} = useSelector(state => state.user)

    // const dispatch = useDispatch()

    // const loggingOut = ()=>{
    //     // <Navigate to={"/login"}/>
    //     dispatch(logOut())
    // }

    return (
        <div>
            <div className="header">
                <p className="header-txt">User System</p>
                <p><Link to="/">Home</Link></p>
                {/* <button className="log-out-btn" onClick={()=>loggingOut()}>LOG OUT</button> */}
                
            </div>
        </div>
    )
}

export default Header
