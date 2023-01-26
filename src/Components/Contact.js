import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

const Contact = (props) => {

  useEffect(() => {
    props.resetAnimation();
  }, [])

  return (
    <motion.div
    initial={props.goBack === false ? {left: "100%"} : {left: "-100%"}}
    animate={{left: 0}}
    exit={props.goBack === false ? {left: "-100%"} : {left: "100%"}}
    transition={{duration: .25, type: "tween"}}
    className='contact'
    >
      <h1>/ contact</h1>
      <div className='content'>
        <div className='linkedin'>linkedin: <a href='https://www.linkedin.com/in/micheal-lowell-944a05234/'>micheal lowell</a></div>
        <div className='email'>email: <a href='mailto: mlowell94@gmail.com'>mlowell94@gmail.com</a></div>
        <div className='discord'>github: <a href='https://github.com/mlowell94'>mlowell94</a></div>
      </div>
    </motion.div>
  )
}

export default Contact