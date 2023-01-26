import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import projectData from '../projectData'
import ProjectThumb from './ProjectThumb'

const AllProjects = (props) => {
  useEffect(() => {
    props.resetAnimation();
    }, [])

    return (
    <motion.div
    className='all-projects'
    >
      {Object.keys(projectData).map(siteID => 
      <ProjectThumb key={projectData[siteID].name}  project={projectData[siteID]} goBack = {props.goBack}/>)}
    </motion.div>
  )
}

export default AllProjects