import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Nav = () => {
  const location = useLocation()
  return (
    <div className='nav-outer'>
      <h1 className='site-title'>micheal lowell</h1>
      <div className='navbar'>
        <Link to='/'>{<span><span className='nav-el' id={location.pathname === '/' ? 'active' : ''}>{'//'}</span>about</span>}</Link>
        <Link to='/projects'>{<span><span className='nav-el' id={location.pathname === '/projects' ? 'active' : ''}>{'//'}</span>projects</span>}</Link>
        <Link to='/contact'> {<span><span className='nav-el' id={location.pathname === '/contact' ? 'active' : ''}>{'//'}</span>contact</span>}</Link>
      </div>
  </div>
  )
}

export default Nav