import React, { Component } from 'react'
import InstructorCanvas from '../threejs/InstructorCanvas'
// import DashboardControls from '../DashboardControls'
import WindowResize from '../posenet/WindowResize'

export default class AppContainer extends Component {

  

  render(){
    return (
        <div className="dashboard">
          <div className="posenet">
            <WindowResize/>  
          </div>
          <div className="three">
            <InstructorCanvas /> 
          </div>
        </div>
    )
  }
}
