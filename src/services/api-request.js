import axios from "axios"
import PropTypes from "prop-types";
import Blockquote from "~/pages/post/components/blokquote/index.jsx";

export const ApiRequest = (endpoint, method, payload) => {
    return axios({
        url: `https://blog.mst-api.com.tr/api${endpoint}`,
        method,
        data: payload,
        headers: {
            'Content-Type': 'application/json',
            //'api-key': process.env.REACT_APP_API_KEY
        }
    })
        .then(response => response.data)
        .catch(error => {
            return error.response.data;
        });
};

ApiRequest.propTypes = {
    endpoint: PropTypes.string,
    method: PropTypes.string,
    payload: PropTypes.object
}

Blockquote.defaultProps = {
    payload: null
}