import React, { Suspense } from 'react'
import { useState } from 'react'
import './App.css'
import Box from './components/Box'
import Sphere from './components/AnimatedSphere'
import Brain from "./components/Brain"

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Cloud, Stars } from '@react-three/drei'

function App() {

  return (
    <div className="w-screen h-screen bg-slate-900">
      <div className="bg-slate-200 p-10 h-1/3">
        <p className='text-center text-slate-900 p-20 text-2xl'>
          Head in the clouds?
        </p>
      </div>


      <div className='h-1/3 relative'>
        <div class="wave z-40">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
          </svg>
        </div>
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.2} />
          <directionalLight position={[-2, 5 , 2]} intensity={.5} />
          <Suspense fallback={null}>
          <Cloud position={[1, 1, 1]} args={[6, 6]} />
            <Brain />
          </Suspense>
        </Canvas>
        <div class="wave-bottom">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
          </svg>
        </div>
      </div>


      <div className="bg-slate-200 h-1/3 p-20">
        <p className='text-center text-slate-900 text-2xl p-10'>
          Time to take a break!
        </p>
      </div>
    </div>
  )
}

export default App
