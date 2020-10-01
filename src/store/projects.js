import axios from 'axios'

const api = 'https://gz-server.herokuapp.com/projects'

// A C T I O N   C R E A T O R S //
const GET_ALL_SOFTWARE_PROJECTS = 'GET_ALL_SOFTWARE_PROJECTS'
const GET_ONE_SOFTWARE_PROJECT = 'GET_ONE_SOFTWARE_PROJECT'
const DELETE_PROJECT = 'DELETE_PROJECT'


// A C T I O N S //
const gotSFAllProjects = softwareProjects => ({
    type: GET_ALL_SOFTWARE_PROJECTS,
    softwareProjects
})

const gotOneProject= softwareProject => ({
    type: GET_ONE_SOFTWARE_PROJECT,
    softwareProject
})

const deletedProject = softwareProjects => ({
    type: DELETE_PROJECT,
    softwareProjects
})

// T H U N K S //
export const fetchSoftwareProjects = () => async dispatch => {
    try {
        const {data} = await axios.get(`${api}`)
        dispatch(gotSFAllProjects(data))
    } catch (error) {
        console.error(error, "didn't receive data")
    }
}

export const fetchOneSoftwareProject = ( name ) => async dispatch => {
    try {
        const {data} = await axios.get(`${api}/${name}`)
        dispatch(gotOneProject(data))
    } catch (error) {
        console.error(error, "didn't receive data")
    }
}

export const removeProject = ( name ) => async dispatch => {
    try {
        const { data } = await axios.delete(`${api}/${name}`)
        dispatch(deletedProject(data))
    } catch (error) {
        console.error(error, 'Unable to delete project')
    }
}


// I N I T I A L   S T A T E //
const initialState = {
    softwareProjects: [],
    softwareProject: {}
}

// R E D U C E R //
export default function artworkReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_SOFTWARE_PROJECTS:
            return {...state, softwareProjects: action.softwareProjects}
        case GET_ONE_SOFTWARE_PROJECT:
            return {...state, softwareProject: action.softwareProject}
        case DELETE_PROJECT:
            return {...state, softwareProjects: action.softwareProjects}
        default:
            return state
    }
}