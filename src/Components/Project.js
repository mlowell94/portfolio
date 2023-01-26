import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'

const Project = (props) => {

  useEffect(() => {
    props.resetAnimation();
  }, [])

  const projectID = useParams();
  return (
    <motion.div
    initial={props.goBack === false ? {left: "100%"} : {left: "-100%"}}
    animate={{left: 0}}
    exit={props.goBack === false ? {left: "-100%"} : {left: "100%"}}
    transition={{duration: .25, type: "tween"}}
    >{projectID.id}</motion.div>
  )
}

export default Project