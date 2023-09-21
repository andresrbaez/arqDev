import axios from 'axios'

export const getAllProjects = () => {
    return axios.get('http://localhost:4000/projects/api/v1/projects/')
}
export const getProject = (id) => {
    return axios.get(`http://localhost:4000/projects/api/v1/projects/${id}`)
}