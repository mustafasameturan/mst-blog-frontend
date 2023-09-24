import PropTypes from "prop-types";
import classNames from "classnames";

export default function Blockquote({ text, color }){
    return (
        <div
            className={classNames("border border-l-[20px] rounded-lg font-medium mb-8 mt-8 py-4 px-6", {
                "bg-cyan-100 border-cyan-800 text-teal-700" : color === "green",
            })}
        >
            <p>{text}</p>
        </div>
    );
}

Blockquote.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    borderColor: PropTypes.string
}

Blockquote.defaultProps = {
    color: "green"
}