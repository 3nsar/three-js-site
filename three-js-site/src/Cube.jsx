import React from 'react'
import {Canvas} from "@react-three/fiber"
import {OrbitControls, PerspectiveCamera, RenderTexture, Sphere, Text} from "@react-three/drei"


const Cube = () => {
  return (
    <mesh> {/*YOU need to add this to start */}
    <boxGeometry args={[2,2,2]}/>
    <meshStandardMaterial>
        <RenderTexture attach="map">
            <PerspectiveCamera
                makeDefault
                position={[0,0,4]}
            />
            <color attach="background" args={["red"]}/>
            <Text fontSize={3} color="black">
                hello
            </Text>
        </RenderTexture>
    </meshStandardMaterial>
  </mesh>
  )
}

export default Cube