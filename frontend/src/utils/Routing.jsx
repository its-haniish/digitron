import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import Events from '../components/Events'
import Members from '../components/Members'
import Event from '../components/Event'
import MemberBio from '../components/MemberBio'
import Compition from '../components/Compition'
import Error from '../components/Error'

const Routing = () => {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/events" element={<Events />} />
    <Route path="/members" element={<Members />} />
    <Route path="/member/:id" element={<MemberBio />} />
    <Route path="/event/:id" element={<Event />} />
    <Route path="/compitition/:id" element={<Compition />} />
    <Route path="*" element={<Error />} />

  </Routes>

  )
}

export default Routing