import PropTypes from "prop-types";
import classNames from "classnames";
import {ErrorMessage, Field} from "formik";

export default function Input({ label, name, as, variant, isValidation, ...props }) {
    return (
        <>
            {label && <div className="block pb-3 font-body font-medium text-primary dark:text-white">{label}</div>}
            <Field
                as={as}
                name={name}
                className={classNames("w-full border border-primary bg-grey-lightest px-5 py-4 font-body font-light text-primary placeholder-primary transition-colors focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary", {
                    "" : variant === "normal",
                    "dark:border-secondary sm:w-1/2" : variant === "large",
                })}
                {...props}
            />
            {isValidation && <ErrorMessage component="small" name={name} className="text-xs text-red-500 dark:text-red-400 mt-1 block" />}
        </>
    )
}

Input.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    props: PropTypes.object,
    as: PropTypes.oneOf(['input', 'textarea']),
    variant: PropTypes.oneOf(['normal', 'large']),
    isValidation: PropTypes.bool
}

Input.defaultProps = {
    as: 'input',
    variant: 'normal',
    isValidation: false
}