import store from "..";
import {_adminLogin, _adminLogout} from "~/stores/auth/index.js";

export const adminLogin = (token) => store.dispatch(_adminLogin(token));
export const adminLogout = () => store.dispatch(_adminLogout());