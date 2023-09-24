import PropTypes from "prop-types";
import classNames from "classnames";
import {ErrorMessage, Field} from "formik";

export default function Input({ outerClassnames, label, name, as, ...props }) {
    return (
        <div
            className={classNames("", {
                [outerClassnames] : !!outerClassnames
            })}
        >
            {label && <div className="block pb-3 font-body font-medium text-primary dark:text-white">{label}</div>}
            <Field
                as={as}
                name={name}
                className="w-full border border-primary bg-grey-lightest px-5 py-4 font-body font-light text-primary placeholder-primary transition-colors focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
                {...props}
            />
            <ErrorMessage component="small" name={name} className="text-xs text-red-500 mt-1" />
        </div>
    )
}

Input.propTypes = {
    outerClassnames: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    props: PropTypes.object,
    as: PropTypes.oneOf(['input', 'textarea'])
}

Input.defaultProps = {
    as: 'input'
}