import axios from 'axios'

const apiFilmes = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        'content-type': 'application/json;charset=utf-8',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NmQ3M2NjZmNmY2UwNzg0ODEwMGRmOWQ2OWQ4OTM4ZSIsInN1YiI6IjVhOTE1ZjM3OTI1MTQxNDE3ZDAwOTUzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1LQBovGOn69k7BpSS0BUeJZ1sFAvrSPUz7ydm7ekKS0'
    }
})

export default apiFilmes