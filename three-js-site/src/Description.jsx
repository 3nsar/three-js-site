import React from 'react'
import Cylinder from './Cylinder'
import {Canvas} from "@react-three/fiber"
import {OrbitControls, PerspectiveCamera, RenderTexture, Sphere, Text} from "@react-three/drei"

const Description = () => {
  return (
    <div className='container'>
    <Canvas> {/*FRAME AND INSIDE WE CAN NOT CREATE SOME HTML CODE LIKE <div>*/}
        <OrbitControls enableZoom={false} autoRotate/> {/*ROTATE*/}
        <ambientLight intensity={1}/>
        <directionalLight position={[3,2,1]}/>
        <Cylinder/>
    </Canvas>
</div>
  )
}

export default Description