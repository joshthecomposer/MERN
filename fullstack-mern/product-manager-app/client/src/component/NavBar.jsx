import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="flex justify-center py-5 bg-neutral-500 text-white">
            <nav className="flex gap-3">
                <Link to="/">Home</Link>
            </nav>
        </div>
  )
}

export default NavBar