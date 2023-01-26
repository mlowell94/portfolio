import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Me from '../assets/me.jpg'
import ReactImg from '../assets/react.svg'
import JavascriptImg from '../assets/javascript.svg'
import JavaImg from '../assets/java.svg'
import PythonImg from '../assets/python.svg'
import GitImg from '../assets/git-icon.svg'
import GitHubImg from '../assets/github-icon.svg'
import WebpackImg from '../assets/webpack.svg'
import JestImg from '../assets/jest.svg'
import NpmImg from '../assets/npm-icon.svg'
import HtmlImg from '../assets/html-5.svg'
import CssImg from '../assets/css-3.svg'
import NodeImg from '../assets/nodejs-icon.svg'
import ExpressImg from '../assets/express.svg'
import MySQLImg from '../assets/mysql.svg'
import Resume from '../assets/Resume.pdf'

const About = (props) => {

  useEffect(() => {
    props.resetAnimation();
  }, [])

  return (
    <motion.div
    initial={props.goBack === false ? {left: "100%"} : {left: "-100%"}}
    animate={{left: 0}}
    exit={props.goBack === false ? {left: "-100%"} : {left: "100%"}}
    transition={{duration: .25, type: "tween"}}
    className='about'
    >
      <h1>/ about</h1>
      <div className='profile'>
        <img src={Me} alt='A hastily drawn man with blue eyes'/>
        <div className='content'>
        <div className='profile-text'>
            I'm <span>Micheal</span>, a self-taught web developer from the US. 
            My background is varied, and I discovered my love for coding on accident while studying for a Linguistics Master's degree. 
            I found the challenges presented by coding engaged me in ways Linguistics did not. 
            Above that, working with front-end web technologies allowed me to showcase my work to friends and peers in fun and interactive ways.
            I've since dedicated myself nearly full-time to learning new technologies, and I've never been happier.
            <br/>
            <br/>
            My resume can be found <a href={Resume} target='_blank' rel="noreferrer">here</a>.
        </div>
        <div className='technologies'>
          <div className='left'>
          <ul className='languages'>
            <li className='header'>Languages</li>
            <ul>
              <li><img src={JavascriptImg} alt='The Javascript logo depicting a square with "JS" in the right corner' />Javascript</li>
              <li><img src={PythonImg} alt='The Python logo depicting a plus sign made of two different structures' />Python</li>
              <li><img src={JavaImg} alt='The Java logo depicting a coffee mug with steam rising from it' />Java</li>
            </ul>
          </ul>
          <ul className='Other'>
              <li className='header'>Other</li>
              <ul>
                <li><img src={GitImg} alt='The Git logo depicting a branching line' />Git</li>
                <li><img src={GitHubImg} alt='The GitHub logo depicting a cat headed creature with tentacles' />GitHub</li>
                <li><img src={WebpackImg} alt='The Webpack logo depicting a cube within a largere polygon' />Webpack</li>
                <li><img src={JestImg} alt="The Jest logo depicting a jester's footwear" />Jest</li>
                <li><img src={NpmImg} alt='The npm logo depicting a stylized letter n within a block' />npm</li>
              </ul>
            </ul>
          </div>
          <ul className='frameworks'>
          <li className='header'>Technologies</li>
            <ul>
            <li className='subheader'>Frontend</li>
              <ul>
                <li><img src={HtmlImg} alt='The HTML5 logo depicting the letters H T M L above the number 5' />HTML</li>
                <li><img src={CssImg} alt='The CSS3 logo depicting the letters CSS above the number 3' />CSS</li>
                <li><img src={ReactImg} alt='The React logo depicting an atom' />React</li>
              </ul>
            </ul>
            <ul>
              <li className='subheader'>Backend</li>
              <ul>
                <li><img src={NodeImg} alt='The Node.js logo depicting a J and an S within a hexagon' />Node.js</li>
                <li><img src={ExpressImg} alt='The Express logo depicting the letters E and X' />Express.js</li>
                <li><img src={MySQLImg} alt='The MySQL logo depicting a dolhpin' />MySQL</li>
              </ul>
            </ul>
            </ul>
            </div>
          </div>
        </div>
    </motion.div>
  )
}

export default About