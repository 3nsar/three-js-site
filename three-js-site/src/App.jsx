import { useState } from 'react'
import './App.css'
import {Canvas} from "@react-three/fiber"
import {OrbitControls, PerspectiveCamera, RenderTexture, Sphere, Text} from "@react-three/drei"
import Test from './Test'
import Hero from './Hero'
import WebDesign from './WebDesign'
import Description from './Description'

function App() {

  return (
    <div className="App">
      <Hero/>
      <Test/>
      <WebDesign/>
      <Description/>
    </div>
  )
}

export default App
