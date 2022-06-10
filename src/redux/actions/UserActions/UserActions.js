import { message } from "antd"
import { userServices } from "../../../services/UsersServices"
import { SIGNIN_ACTION } from "../../types/UsersTypes"

export const signIn = (infoLogin) => {
    return async (dispatch) => {
        try {
            const result = await userServices.signIn(infoLogin)
            console.log(result);
            if (result.data.statusCode === 200) {
                dispatch({
                    type: SIGNIN_ACTION,
                    infoLogin: result.data.content
                })
                console.log('ok');
                message.success('You have succesfully signed in our website.')
            }
        }
        catch (error) {
            message.error(`${error.response.data.message}`);
        }
    }
}
export const signUp = (infoRegister) => {
    return async (dispatch) => {
        try {
            const result = await userServices.signUp(infoRegister)
            console.log(result);
            if (result.data.statusCode === 200) {
                message.success('You have succesfully signed up.')
            }
        }
        catch (error) {
            message.error(`${error.response.data.message}`);
        }
    }
}