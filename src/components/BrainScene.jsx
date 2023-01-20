import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Cloud, Sky, Float, Grid } from '@react-three/drei'
import Brain from './Brain'

function BrainScene() {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={.05} />
      <ambientLight intensity={0.1} />
      <directionalLight position={[-10, 0 , 2]} intensity={.5} />
      <Suspense fallback={null}>
      <Grid cellColor="red" sectionColor="#2080ff" args={[3000, 3000]} scale={100} position={-50}/>
        <Sky 
          sunPosition={[-10, 0, 0]} 
          distance={3000} 
          inclination={0.1}
          rayleigh={5} 
          turbidity={4.8}
          mieCoefficient={0.05}
          mieDirectionalG={.64}
        />
        <Float>
          <Cloud 
            position={[8, 3, 5]} 
            opacity={1} 
            width={5} 
            speed={.4} 
            segments={20} 
            depth={5} 
          />
          <Cloud 
            position={[-8, -3, -5]} 
            opacity={1} 
            width={5} 
            speed={.4} 
            segments={20} 
            depth={5} 
          />
        </Float>
        <Float speed={2}>
          <Brain />
        </Float>
      </Suspense>
    </Canvas>
  )
}

export default BrainScene