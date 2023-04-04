import React from 'react'
import {Canvas} from "@react-three/fiber"
import {OrbitControls, PerspectiveCamera, RenderTexture, Sphere, Text} from "@react-three/drei"
import Cube from './Cube'


const Test = () => {
  return (
    <div className='container'>
        <Canvas> {/*FRAME AND INSIDE WE CAN NOT CREATE SOME HTML CODE LIKE <div>*/}
            <OrbitControls enableZoom={false} autoRotate/> {/*ROTATE*/}
            <ambientLight intensity={1}/>
            <directionalLight position={[3,2,1]}/>
            <Cube/>
        </Canvas>
    </div>
  )
}

export default Test