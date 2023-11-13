import {RequestMethods} from "~/utils/consts/enums.js";
import {ApiRequest} from "~/services/api-request.js";

export const AddSubscribe = async (email) => {
    const url = "/subscribes/add";
    const method = RequestMethods.POST;
    const payload = {
        email: email
    }

    return await ApiRequest(url, method, payload);
}