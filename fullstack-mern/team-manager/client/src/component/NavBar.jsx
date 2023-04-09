import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <ul className="flex gap-5 underline justify-center text-lg uppercase text-blue-500">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/new">New Player</Link></li>
                <li><Link to="/manager">Game</Link></li>
            </ul>
        </>
    )
}

export default NavBar