import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to={'/user/'}>Profile</Link>
        <Link to={'/user/edit'}>EditProfile</Link>
    </div>
  )
}

export default Navbar