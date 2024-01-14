import PropTypes from "prop-types";
import classNames from "classnames";


export default function Badge({index, title, classnames}){
    return (
        <span className={classNames("mb-4 inline-block rounded-full px-2 py-1 font-body text-sm", {
            "ml-4" : index !== 0,
            [classnames] : !!classnames
        })}>
            {title}
        </span>
    )
}

Badge.propTypes = {
    index: PropTypes.number,
    title: PropTypes.string,
    classnames: PropTypes.string
}

Badge.defaultProps = {
    classnames: "bg-green-light text-green"
}