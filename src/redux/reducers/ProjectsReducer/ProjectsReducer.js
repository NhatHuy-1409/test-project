import { TOKEN } from "../../../util/setting";
import { GET_ALL_PROJECTS, GET_PROJECT_CATEGORY } from "../../types/ProjectsTypes";

const stateDefault = {
    projectCategory:[],
    allProjects:[]
}

const ProjectsReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case GET_PROJECT_CATEGORY:
            const { content } = action
            state.projectCategory = content
            return { ...state }
        case GET_ALL_PROJECTS:
            const { allProjects } = action
            console.log(allProjects);
            state.allProjects = allProjects
            return { ...state }

        default:
            return state
    }
}
export default ProjectsReducer