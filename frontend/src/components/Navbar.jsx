import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-20 bg-opacity-50  text-black p-4 flex justify-between items-center bg-opacity-40 backdrop-blur-md   rounded-lg shadow-xl border border-white border-opacity-30">
      <Link to="/" className="flex justify-center items-center gap-5">
        <img className='w-10 h-10 rounded-full ' src="https://media-del2-2.cdn.whatsapp.net/v/t61.24694-24/467336501_496051830119916_7728596386753854699_n.jpg?ccb=11-4&oh=01_Q5AaIDAY5O9Nb4hGjUEzI_XhJFAhsiSF0rDTc_VhOiJrPwrj&oe=67C31746&_nc_sid=5e03e0&_nc_cat=109" alt="" />
        <h1 className='font-bold'>Digitron</h1></Link >
      <ul className="flex gap-4">
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/members">Members</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        {/* Add more navigation links */}
      </ul>
    </nav>
  )
}

export default Navbar