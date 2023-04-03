import { useState } from 'react'
import './App.css'
import {Canvas} from "@react-three/fiber"
import {OrbitControls, PerspectiveCamera, RenderTexture, Sphere, Text} from "@react-three/drei"

function App() {

  return (
    <div className="App">
      <div className='container'>
      <Canvas>
        <OrbitControls enableZoom={false} autoRotate={true}/>
        <ambientLight intensity={1}/>
        <directionalLight position={[3,2,1]}/>
        <mesh>
          <boxGeometry  args={[2,2,2]}/>
          <meshStandardMaterial>
          <RenderTexture attach="map">
            <PerspectiveCamera
              makeDefault
              position={[0,0,5]}
            />
            <color attach="background" args={["red"]}/>
            <Text fontSize={3} color="#555">
              hello
            </Text>
          </RenderTexture>
          </meshStandardMaterial>
        </mesh>
      </Canvas>
      </div>
    </div>
  )
}

export default App
