import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: 'b6cffb96712bb8ef9b154969b53e1c43',
        language: 'ko-KR'
    }
})
export default instance