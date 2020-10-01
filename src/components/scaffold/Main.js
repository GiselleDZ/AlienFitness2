import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSoftwareProjects, fetchOneSoftwareProject, removeProject } from '../store/projects'

class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            test : ''
        }
    }

    componentDidMount(){
        // const name = 'Pentimento'
        // const deleteName = 'Tensor Three'
        // this.props.getAllSP()
        // this.props.getOneSP(name)
        // this.props.removeSP(deleteName)
    }

    render(){
        const { softwareProjects } = this.props
        // console.log(softwareProjects)
        return(
            <div> 
            </div>
        )
    }
}

const mapState = state => ({
    softwareProjects: state.softwareProjects,
    softwareProject: state.softwareProject
})

const mapDispatch = dispatch => ({
    getAllSP : () => dispatch( fetchSoftwareProjects() ),
    getOneSP : (projectName) => dispatch( fetchOneSoftwareProject(projectName) ),
    removeSP: (projectName) => dispatch( removeProject(projectName) )
})

export default connect (mapState, mapDispatch) (Main)