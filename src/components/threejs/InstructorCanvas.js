import React from 'react'
import {Canvas} from 'react-three-fiber'
import Scene from './Scene'
import Controls from './Controls'

function InstructorCanvas() {

  const videoContainer = document.getElementsByTagName("video")
  // const videoWidth = videoContainer[0].width
  // const videoHeight = videoContainer[0].height

  const threeCanvas = document.getElementsById
  console.log(threeCanvas)

  
  return (
      <Canvas camera={{zoom: 100, position: [0, 200, 500]}} id="three-canvas">
        <Controls />
        <Scene />
      </Canvas>
  )
}

export default InstructorCanvas
