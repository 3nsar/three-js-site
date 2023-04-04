import React from 'react'
import SideChair from "./Side_chair"
import {Canvas} from "@react-three/fiber"
import {MeshDistortMaterial, OrbitControls, PerspectiveCamera, RenderTexture, Text} from "@react-three/drei"


const WebDesign = () => {
  return (
    <div className='container'>
    <Canvas>
        <OrbitControls enableZoom={false} autoRotate/> {/*ROTATE*/}
        <ambientLight intensity={1}/>
        <directionalLight position={[3,2,1]}/>
        <SideChair />
    </Canvas>
    </div>
  )
}

export default WebDesign