import axios from 'axios'
// import {API_URL} from './config'

const service = axios.create({
    // baseURL: API_URL
})

// axios 요청 시 필요한 정보를 넣어주세요
// service.interceptors.request.use(
//     (config) => {
//         config.headers = {
//             'Content-Type': 'application/json'
//         }
//     }
// )
//
// // 응답에 필요한 처리를 넣어주세요.
// service.interceptors.response.use(
//     (res) => { console.log('api res : ' ,res)},
//     (error) => Promise.reject(error)
// )

// 각 메소드별 함수를 생성해 주세요.
export default {
    async get(options) {
        try {
            const res = await service.get(options)
            return res
        } catch (e) {
           console.error(e)
        }
    },

    // async post(...options) {
    //     // 공통
    // },
    //
    // async put(...options) {
    //     // 공통
    // },
    //
    // async delete(...options) {
    //     // 공통
    // },
}