import {RequestMethods} from "~/utils/consts/enums.js";
import {ApiRequest} from "~/services/api-request.js";

export const GetTopPosts = async () => {
    const url = `/posts/getTopPosts/${import.meta.env.VITE_TOP_POST_COUNT}`;
    const method = RequestMethods.GET;

    return ApiRequest(url, method);
}

export const GetAllPosts = async (model) => {
    const url = '/posts/getAllPosts';
    const method = RequestMethods.POST;
    const payload = { ...model };

    return ApiRequest(url, method, payload);
}

export const GetPostByPostLink = async (postLink) => {
    const url = `/posts/getPostByLink/${postLink}`;
    const method = RequestMethods.GET;

    return ApiRequest(url, method);
}

export const UpdateReadTime = async (model) => {
    const url = '/posts/updateReadTime/';
    const method = RequestMethods.PUT;
    const payload = { ...model };

    return ApiRequest(url, method, payload);
}