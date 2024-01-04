import PropTypes from "prop-types";
import classNames from "classnames";

export default function Loading({ classnames }) {
    return (
        <div
            className={classNames("flex justify-center items-center", {
                [classnames] : !!classnames
            })}
        >
            <div className="rounded-full h-4 w-4 bg-primary dark:bg-white animate-ping"></div>
        </div>
    );
}

Loading.propTypes = {
    classnames: PropTypes.string
}