import PropTypes from "prop-types";

export default function Paragraph({ text }){
    return <p className="indent-4 text-justify p-0 mb-4 leading-[25px] text-primary dark:text-white">{text}</p>
}

Paragraph.propTypes = {
    text: PropTypes.string
}