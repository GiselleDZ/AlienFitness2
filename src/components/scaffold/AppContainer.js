import React, { Component } from 'react'
// import InstructorCanvas from '../threejs/InstructorCanvas'
import DashboardControls from '../DashboardControls'
import PoseNet from '../posenet/PoseNet'

export default class AppContainer extends Component {

  render(){
    return (
        <div className="header">
          <PoseNet />
          {/* <DashboardControls /> */}
        </div>
    )
  }
}
