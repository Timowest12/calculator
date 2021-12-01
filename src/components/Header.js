import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <header class='nav'>
            <h1>Math Magicans</h1>
            <ul className="navitems">
           
            <Link to="/"><li className="navitem">home</li></Link>
            <Link to="/caculator"><li className="navitem">calculator</li></Link>
            <Link to="/quote"><li className="navitem">quote</li></Link>
            </ul>
        </header>
    )
}

export default Header
