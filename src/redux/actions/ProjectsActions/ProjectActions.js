import { message } from "antd"
import { projectServices } from "../../../services/ProjectServices";
import { GET_ALL_PROJECTS, GET_PROJECT_CATEGORY } from "../../types/ProjectsTypes";


export const getProjectCategory = () => {
    return async (dispatch) => {
        try {
            const result = await projectServices.getProjectCategory()
            if (result.data.statusCode === 200) {
                dispatch({
                    type: GET_PROJECT_CATEGORY,
                    content: result.data.content
                })
            }
        }
        catch (error) {
            message.error(`${error.response.data.message}`);
        }
    }
}

export const createProject = (data) => {
    return async (dispatch) => {
        try {
            const result = await projectServices.createProject(data)
            console.log(result);
            if (result.data.statusCode === 200) {
                message.success('You have succesfully created project.')
            }
        }
        catch (error) {
            message.error(`${error.response.data.content}`);
        }
    }
}

export const getAllProjects = () => {
    return async (dispatch) => {
        try {
            const result = await projectServices.getAllProjects()
            if (result.data.statusCode === 200) {
                dispatch({
                    type: GET_ALL_PROJECTS,
                    allProjects: result.data.content
                })
            }
        }
        catch (error) {
            message.error(`${error.response.data.message}`);
        }
    }
}