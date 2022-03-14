import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div className='nav-container'>
            <Link to="/"><p>Find Modpacks</p></Link>
            <Link to="/browse"><p>Browse Modpacks</p></Link>
            <p>About</p>
        </div>
    )
}

export default Nav