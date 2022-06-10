import { TOKEN } from "../../../util/setting";
import { SIGNIN_ACTION } from "../../types/UsersTypes"

const stateDefault = {}

const UsersReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case SIGNIN_ACTION:
            const { infoLogin } = action
            localStorage.setItem(TOKEN,JSON.stringify(infoLogin.accessToken));
            return { ...state }

        default:
            return state
    }
}
export default UsersReducer