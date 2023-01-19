import React, { Suspense } from 'react'
import { useState } from 'react'
// import './App.css'
import Box from './components/Box'
import Sphere from './components/AnimatedSphere'
import Brain from "./components/Brain"

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function App() {

  return (
    <div className="bg-slate-900 h-screen w-screen">
      <div className='h-1/2 w-2/3'>
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.2} />
          <directionalLight position={[-2, 5 , 2]} intensity={.5} />
          <Suspense fallback={null}>
            <Box />
          </Suspense>
        </Canvas>
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.2} />
          <directionalLight position={[-2, 5 , 2]} intensity={.5} />
          <Suspense fallback={null}>
            <Sphere />
          </Suspense>
        </Canvas>
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.2} />
          <directionalLight position={[-2, 5 , 2]} intensity={.5} />
          <Suspense fallback={null}>
            <Brain />
          </Suspense>
        </Canvas>
      </div>
    </div>
  )
}

export default App
