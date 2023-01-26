import React, { useCallback } from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { BrowserRouter } from 'react-router-dom'
import LittleGuy from './Components/LittleGuy'
import Main from './Components/Main'
import Nav from './Components/Nav'

const App = () => {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async container => {

  }, []);
  return (
    <BrowserRouter>
    <div className='all'>
      <div className='fade' id='one'></div>
      <div className='fade' id='two'></div>
      <div className='fade' id='three'></div>
      <div className='fade' id='four'></div>
      <Particles 
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#FFFFFF",
            },
          },
          fpsLimit: 60,
          particles: {
            color: {
              value: "#000000",
            },
            move: {
              direction: "top-left",
              enable: true,
              outModes: {
                default: "out",
              },
              speed: 2.5,
              random: true,
              straight: true,
            },
            number: {
              density: {
              enable: true,
              area: 1000,
              },
              value: 80,
            },
            opacity: {
              value: {min: .25, max: .75 },
              random: true
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 2 },
              random: true,
            },
          },
            detectRetina: false,
        }}
      />
      <Nav />
      <Main />
      <LittleGuy />
    </div>
    </BrowserRouter>
  )
}

export default App
