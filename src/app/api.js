import axios from 'axios'

const API = axios.create({
    baseURL: "https://opendata.resas-portal.go.jp/api/v1/",
    headers: {'X-API-KEY': "bJIqSKCpKa0FDvw5VanxtSGhgdT7Z5l9PsNidIm2"}
})
export const fetchCities = () => API.get(`/prefectures`)
export const fetchDisWithCity = (prefCode) => API.get(`/cities?prefCode=${prefCode}`)
export const fetchDataDis = (cityCode, prefCode) => API.get(`/population/composition/perYear?cityCode=${cityCode}&prefCode=${prefCode}`)

