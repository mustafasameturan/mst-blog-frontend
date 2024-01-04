import {RequestMethods} from "~/utils/consts/enums.js";
import {ApiRequest} from "~/services/api-request.js";

export const AddContact = async (model) => {
    const url = "/contacts/addContact";
    const method = RequestMethods.POST;
    const payload = { ...model };

    return ApiRequest(url, method, payload);
}