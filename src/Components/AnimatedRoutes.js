import React, { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import About from './About'
import AllProjects from './AllProjects'
import Contact from './Contact'

const AnimatedRoutes = () => {
  const location = useLocation();
  const [goBack, setGoBack] = useState(false)
  
  const resetAnimation = () => {
    setGoBack(false)
  }

  window.onpopstate = () => {
    setGoBack(true)
  }

  return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path='/' exact element = {<About goBack = { goBack } resetAnimation = { resetAnimation } />}/>
                <Route path='/projects' element = {<AllProjects goBack = { goBack } resetAnimation = { resetAnimation } />}/>
                <Route path='/contact' element = {<Contact goBack = { goBack } resetAnimation = { resetAnimation } />}/>
            </Routes>
        </AnimatePresence>
  )
}

export default AnimatedRoutes