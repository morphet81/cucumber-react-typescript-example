import axios from 'axios'

const api = axios.create({
    baseURL: process.env.REACT_APP_SERVICE_URL,
    timeout: 1000,
    withCredentials: false,
    params: {
        apikey: process.env.REACT_APP_API_KEY,
    },
})

export default api