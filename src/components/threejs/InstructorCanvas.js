import React from 'react'
import {Canvas} from 'react-three-fiber'
import Scene from './Scene'
import Controls from './Controls'

function InstructorCanvas() {
  return (
    <Canvas camera={{zoom: 80, position: [0, 200, 500]}}>
      <Controls />
      <Scene />
    </Canvas>
  )
}

export default InstructorCanvas
