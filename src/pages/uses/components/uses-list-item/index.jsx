import PropTypes from "prop-types";
import Button from "~/components/button/index.jsx";
import classNames from "classnames";

export default function UsesListItem({ title, children, classnames }) {
    return(
        <li
            className={classNames("font-body text-lg font-light text-primary dark:text-white pt-4", {
                [classnames]: !!classnames
            })}
        >
            <span className="font-medium">{title}: </span>
            {children}
        </li>
    )
}

UsesListItem.propTypes = {
    title: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    classnames: PropTypes.string
}

UsesListItem.defaultProps = {
    classnames: ''
}