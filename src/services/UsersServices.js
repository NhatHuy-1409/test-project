import { http } from "../util/settingAxios"

export class UserServices {
    signIn = (data) => {
        return http.post('api/Users/signin', data)
    }
    testToken = (data) => {
        return http.post('api/Users/TestToken', data)
    }
    signUp = (data) => {
        return http.post('api/Users/signup', data)
    }
}
export const userServices = new UserServices()  