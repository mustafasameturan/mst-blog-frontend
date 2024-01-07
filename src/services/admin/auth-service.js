import {RequestMethods} from "~/utils/consts/enums.js";
import {ApiRequest} from "~/services/api-request.js";

export const Login = async (model) => {
    const url = "/auths/login";
    const method = RequestMethods.POST;
    const payload = { ...model };

    return ApiRequest(url, method, payload);
}