import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxCrossCircled } from "react-icons/rx";

import { FiMenu, FiX } from "react-icons/fi"; // Importing icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed select-none top-0 left-0 w-full z-20 bg-opacity-50 text-black p-4 flex justify-between items-center bg-opacity-40 backdrop-blur-md rounded-lg shadow-xl border border-white border-opacity-30">
      {/* Logo Section */}
      <Link to="/" className="flex items-center gap-5">
        <img
          className="w-10 h-10 rounded-full"
          src="https://media-del2-2.cdn.whatsapp.net/v/t61.24694-24/467336501_496051830119916_7728596386753854699_n.jpg?ccb=11-4&oh=01_Q5AaIDAY5O9Nb4hGjUEzI_XhJFAhsiSF0rDTc_VhOiJrPwrj&oe=67C31746&_nc_sid=5e03e0&_nc_cat=109"
          alt="Logo"
        />
        <h1 className="font-bold text-lg uppercase">Digitron</h1>
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex font-tilt w-[30%] px-10 uppercase justify-between">
        <li>
          <Link className="navbtn" to="/events">
            Events
          </Link>
        </li>
        <li>
          <Link className="navbtn" to="/members">
            Members
          </Link>
        </li>
        <li>
          <Link className="navbtn" to="/about">
            About Us
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setIsOpen(true)}
      >
        <FiMenu />
      </button>

      {/* Sidebar for Mobile View */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full uppercase h-screen opacity-90 bg-white shadow-lg z-30 flex flex-col p-5 transition-transform transform translate-x-0">
          {/* Close Button */}
          <button
            className="text-2xl self-end w-full flex justify-center"
            onClick={() => setIsOpen(false)}
          >
            <RxCrossCircled />
          </button>

          {/* Sidebar Links */}
          <ul className="flex flex-col mt-10 gap-5 ">
          <li>
              <Link
                className="navbtn text-lg"
                to="/"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="navbtn text-lg"
                to="/events"
                onClick={() => setIsOpen(false)}
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                className="navbtn text-lg"
                to="/members"
                onClick={() => setIsOpen(false)}
              >
                Members
              </Link>
            </li>
            <li>
              <Link
                className="navbtn text-lg"
                to="/about"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Background Overlay when Sidebar is Open */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-20"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
