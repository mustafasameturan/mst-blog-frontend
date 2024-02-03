import PropTypes from "prop-types";

export default function Photograph({ src }){
    return <img src={src} alt="Image" className="mb-4"/>
}

Photograph.propTypes = {
    src: PropTypes.string
}