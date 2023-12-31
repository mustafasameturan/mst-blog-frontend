import PropTypes from "prop-types";
import {createElement} from "react";
import classNames from "classnames";

export default function Button({children, as, variant, classnames, ...props}) {
    return createElement(as, {
        ...props,
        className: classNames("outline-none", {
            "font-medium text-green underline hover:text-secondary dark:text-green-light dark:hover:text-secondary": variant === "text",
            "min-w-72 min-h-16 mt-10 mb-12 block bg-secondary px-10 py-4 text-center font-body text-xl font-semibold text-white transition-colors hover:bg-green sm:inline-block sm:text-left sm:text-2xl": variant === "primary",
            "mt-5 bg-secondary px-5 py-1 font-body text-xl font-semibold text-white hover:bg-green sm:mt-0 md:text-xl": variant === "primary-small",
            [classnames] : !!classnames
        })
    }, children)
}

Button.propTypes = {
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    children: PropTypes.oneOfType([PropTypes.any]),
    variant: PropTypes.oneOf(['primary', 'text', 'primary-small']),
    classnames: PropTypes.string,
    props: PropTypes.oneOfType([PropTypes.object]),
}

Button.defaultProps = {
    as: 'a',
    variant: 'text',
    classnames: '',
}

