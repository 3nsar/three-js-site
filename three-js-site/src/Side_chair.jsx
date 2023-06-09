/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 side_chair.gltf --transform
Author: The Smithsonian Institution (https://sketchfab.com/Smithsonian)
License: CC0-1.0 (http://creativecommons.org/publicdomain/zero/1.0/)
Source: https://sketchfab.com/3d-models/side-chair-9c7f1f712edc4b3196e8dcca39a9a537
Title: Side Chair
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/side_chair-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.04}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Object_4.geometry} material={materials['default']} />
          <mesh geometry={nodes.Object_5.geometry} material={materials['default']} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/side_chair-transformed.glb')
