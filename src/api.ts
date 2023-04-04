import axios from 'axios'

const api = axios.create({
    baseURL: `https://www.omdbapi.com/`,
    timeout: 1000,
    withCredentials: false,
    params: {
        apikey: `2ad09525`,
    },
})

export default api