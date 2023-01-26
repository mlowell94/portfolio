import React from 'react'
import { motion } from 'framer-motion'

const ProjectThumb = (props) => {
  const project = props.project;
  return (
    <motion.div 
    initial={props.goBack === false ? {left: "100%", opacity: 0} : {left: "-100%", opacity: 0}}
    animate={{left: 0, opacity: 1}}
    exit={props.goBack === false ? {left: "-100%", opacity: 0} : {left: "100%", opacity: 0}}
    transition = {{delay: project.animationID * .075, default: {ease: "linear"}}}
    className='project-thumb'>
        {props.project.animationID === 1 ? <h1>/ projects</h1> : ''}
        <img src={require('../assets/' + project.url)} alt = {'text'}/>
        <div className='project-info'>
            <div className='title'>{project.name}</div>
            <div className='blurb'><em>{project.desc}</em></div>
            <div className='links'><a href={project.git}>GitHub</a>{project.live !== '' ? <a href={project.live}>Live Site</a> : ''}</div>
            <div className='icons'>{project.technologyIcons.map(icon => <img src={require('../assets/' + icon)} alt={icon} key={icon}/>)}</div>
        </div>
    </motion.div>
  )
}

export default ProjectThumb