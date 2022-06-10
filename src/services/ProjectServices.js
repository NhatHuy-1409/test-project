import { http } from "../util/settingAxios"

export class ProjectServices {
    getProjectCategory = () => {
        return http.get('api/ProjectCategory')
    }
    createProject = (data) => {
        return http.post('api/Project/createProject',data)
    }
    getAllProjects = (data) => {
        return http.get('api/Project/getAllProject')
    }

}
export const projectServices = new ProjectServices()  