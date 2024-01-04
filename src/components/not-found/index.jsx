import PropTypes from "prop-types";

export default function NotFound({text}){

    return (
        <h4 className="flex justify-center font-body text-md text-primary dark:text-white">
            {text}
        </h4>
    );
}

NotFound.propTypes = {
    text: PropTypes.string
}
