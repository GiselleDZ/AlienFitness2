import React from 'react'
import PoseNet from './PoseNet'

function debounce(fn, ms) {
  let timer
  return _ => {
    clearTimeout(timer)
    timer = setTimeout(_ => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  }
}


export default function WindowResize() {


  

  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight * .47,
    width: window.innerWidth * .47
  })


  React.useEffect(() => {

    const videoContainer = document.getElementsByTagName("video")
    const videoWidth = videoContainer[0].width
    const videoHeight = videoContainer[0].height

    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: videoHeight,
        width: videoWidth
      })
    }, 1000)

    window.addEventListener('resize', debouncedHandleResize)

    return _ => {
      window.removeEventListener('resize', debouncedHandleResize)
    }
  })
  return <PoseNet width={dimensions.width} height={dimensions.height} />
}
