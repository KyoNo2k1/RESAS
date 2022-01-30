import axios from 'axios'

const API = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {'X-API-KEY': process.env.REACT_APP_API_KEY}
})

export const fetchCities = () => API.get(`/prefectures`)
export const fetchDisWithCity = (prefCode) => API.get(`/cities?prefCode=${prefCode}`)
export const fetchDataDis = (cityCode, prefCode) => API.get(`/population/composition/perYear?cityCode=${cityCode}&prefCode=${prefCode}`)

