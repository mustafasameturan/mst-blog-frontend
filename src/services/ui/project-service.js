import {RequestMethods} from "~/utils/consts/enums.js";
import {ApiRequest} from "~/services/api-request.js";

export const GetProjects = async () => {
    const url = "/projects/getAllProjects";
    const method = RequestMethods.GET;

    return await ApiRequest(url, method);
}