import {RequestMethods} from "~/utils/consts/enums.js";
import {ApiRequest} from "~/services/api-request.js";

export const AddPost = async (model) => {
    const url = "/posts/addPost";
    const method = RequestMethods.POST;
    const payload = { ...model };

    return ApiRequest(url, method, payload);
}

export const GetPostCategoryTypes = async () => {
    const url = "/posts/getPostCategoryTypes";
    const method = RequestMethods.GET;

    return ApiRequest(url, method);
}

export const GetPostContentTypes = async () => {
    const url = "/posts/getPostContentTypes";
    const method = RequestMethods.GET;

    return ApiRequest(url, method);
}