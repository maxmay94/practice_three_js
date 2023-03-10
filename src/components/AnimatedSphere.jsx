import React from "react"
import {Sphere, MeshDistortMaterial } from "@react-three/drei"

function AnimatedSphere() {
  return(
    <Sphere visible args={[1, 100, 200]} scale={2.5}> 
      <MeshDistortMaterial 
        color="#3ec410"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={.5}
      />
    </Sphere>
  )
}

export default AnimatedSphere