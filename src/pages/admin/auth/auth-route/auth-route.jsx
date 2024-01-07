import React, {useEffect} from 'react'
import PropTypes from "prop-types";
import {Navigate, useNavigate} from 'react-router-dom'
import {useToken} from "~/stores/auth/hooks.js";

export default function AuthRoute({ children }){

    const token = useToken();
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) navigate("/admin");

    }, [token]);

    return children;
}

AuthRoute.propTypes = {
    children: PropTypes.element
}