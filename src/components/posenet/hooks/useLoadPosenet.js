import {useState, useEffect} from 'react'
import * as posenet from '@tensorflow-models/posenet'
import * as tf from '@tensorflow/tfjs'
import '@tensorflow/tfjs-backend-wasm'
import to from 'await-to-js'


// TO DO : handle 

export default function UseLoadPosenet (modelConfig) {
  
  const modelConfigString = JSON.stringify(modelConfig)
  const [net, setNet] = useState(null)

  useEffect(
    () => {
      async function loadNet() {
        const [err, poseNet] = await to(
          posenet.load(JSON.parse(modelConfigString))
        )
        if (err) {
          setNet(err)
          return
        }
        setNet(poseNet)
      }
      loadNet()
    },
    [modelConfigString]
  )
  return net
}

// TO DO : check on wasm backend hook loading / updates 

tf.setBackend('wasm').then(() => UseLoadPosenet());


