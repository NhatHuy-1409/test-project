import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk'
import ProjectsReducer from "./reducers/ProjectsReducer/ProjectsReducer";
import UsersReducer from "./reducers/UsersReducer/UsersReducer";

const rootReducer = combineReducers({
    UsersReducer,
    ProjectsReducer
})
export const store = createStore(rootReducer,applyMiddleware(thunk))