import service from './service'
import { API_URL, TEST_API, QUESTION_API } from './config'

export const questionApi = {
    getList() {
        return service.get(`${API_URL}${QUESTION_API.list}`)
    }
}

export const testApi = {
    getTests() {
        return service.get(`${API_URL}${TEST_API.test}`)
    },
    // setUser(args) {
    //     return service.post(`${API_URL}${API.user(args)}`)
    // },
    // updateUser(args, param) { // args와 param이 동시 존재하는 경우
    //     return service.put(`${API_URL}${API.user(args)}`, param)
    // }
}

// export const testApi = {
//     getTests() {
//         return service.get(`${API_URL}${API.tests}`)
//     },
//     /* test 등록하기
//      * @param { Object } args
//      * @param { string } args.args1 - 이것
//      * @param { string } args.args2 - 저것
//      * @param { string } args.args3 - 그것
//      */
//     setTest(args) {
//         return service.post(`${API_URL}${API.test(args)}`)
//     }
// }