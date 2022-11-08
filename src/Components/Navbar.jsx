import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        
            <nav>
             <NavLink to="/Home" className='nav-link'> Home </NavLink>
             <NavLink to="/Contract" className='nav-link'> Contract </NavLink>
             <NavLink to="/Blog" className='nav-link' > Blog </NavLink>
             <NavLink to="*" className='nav-link' > Error </NavLink>
             <NavLink to="/User" className='nav-link' > User </NavLink>
            </nav>
     
    )
}

export default Navbar