import {getCookie} from "ko-basic-cookie";
import {decodeToken} from "~/utils/helpers.js";

export default function useAdminAuth() {
    const token = getCookie('token') || false;
    const admin = token && decodeToken(token);

    return { admin };
}