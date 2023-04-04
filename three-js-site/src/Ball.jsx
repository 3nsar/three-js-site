import React from 'react'
import {Canvas} from "@react-three/fiber"
import {MeshDistortMaterial, OrbitControls, PerspectiveCamera, RenderTexture, Text} from "@react-three/drei"

const Ball = () => {
  return (
    <mesh> {/*YOU need to add this to start */}
    <sphereGeometry args={[2,100,200]}/>
    <meshStandardMaterial>
        <RenderTexture attach="map">
            <PerspectiveCamera
                makeDefault
                position={[1,0,2]}
            />
            <color attach="background" args={["red"]}/>
            <Text fontSize={1} color="black">
                hello
            </Text>
        </RenderTexture>
    </meshStandardMaterial>
  </mesh>
  )
}

    

export default Ball