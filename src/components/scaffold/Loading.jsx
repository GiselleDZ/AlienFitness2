import React, { Component } from 'react'

export default class Loading extends Component {

  render(){
    return (
        <div className="loading">
            <img src=".\public\assets\imgs\Loading-algo-blob.gif" alt="algo generated blob, increasing and decreasing size" className="loading__image"/>
            <h4 className="loading__text">...loading...</h4>
        </div>
    )
  }
}
