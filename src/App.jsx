import React, { Suspense } from 'react'
import { useState } from 'react'
// import './App.css'
import Box from './components/Box'
import Sphere from './components/AnimatedSphere'
import Brain from "./components/Brain"

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Cloud, Stars } from '@react-three/drei'

function App() {

  return (
    <div className="w-screen h-screen bg-slate-900">
      <div className='h-1/3'>
        <Canvas>

          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.2} />
          <directionalLight position={[-2, 5 , 2]} intensity={.5} />
          <Suspense fallback={null}>
            <Box />
          </Suspense>
        </Canvas>
        <Canvas>
          <OrbitControls enableZoom={false} enableRotate={false} />
          <ambientLight intensity={0.2} />
          <directionalLight position={[-2, 5 , 2]} intensity={.5} />
          <Suspense fallback={null}>
            <Sphere />
          </Suspense>
        </Canvas>
        <div className='absolute bg-red-600 skew-y-6 skew-x-6 font-semibold p-1 left-[290px] top-[450px] '>
          oh shit
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
      </div>
    </div>
  )
}

export default App
