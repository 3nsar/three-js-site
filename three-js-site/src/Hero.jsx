import React from 'react'
import {Canvas} from "@react-three/fiber"
import {OrbitControls, PerspectiveCamera, RenderTexture, Text} from "@react-three/drei"
import Cube from './Cube'
import Ball from './Ball'

const Hero = () => {
  return (
    <div className='container'>
        <h1>Hello </h1>
       <Canvas> {/*FRAME AND INSIDE WE CAN NOT CREATE SOME HTML CODE LIKE <div>*/}
            <OrbitControls enableZoom={false} autoRotate/> {/*ROTATE*/}
            <ambientLight intensity={1}/>
            <directionalLight position={[3,2,1]}/>
            <Ball/>
        </Canvas> 
    </div>
  )
}

export default Hero