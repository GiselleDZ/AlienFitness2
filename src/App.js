import React, { Component } from 'react'
import Navigation from './components/scaffold/Navigation'
import AppContainer from './components/scaffold/AppContainer'
import Loading from './components/scaffold/Loading'
import Footer from './components/scaffold/Footer'
import "../public/css/style.css"


export default class App extends Component {
  constructor(){
    super()
      this.state = {
          loaded : false
      }
  }

  componentDidMount(){
      this.setState({
          loaded : true
      })
  }
  
  render(){
    return (
        <div className="main">
            <Navigation />

            {/* put all other components inside AppContainer Component*/}
            <AppContainer />

            {
                this.state.loaded === true ? (
                    <div id="loaded">
                    </div>
                  ) 
                  : ( <Loading /> )
            }
            <Footer />
        </div>
    )
  }
}
