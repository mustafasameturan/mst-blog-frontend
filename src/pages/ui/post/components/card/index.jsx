import PropTypes from "prop-types";

export default function Card({text, textUnderline, buttonText, href}){
    return (
        <div className="mt-8 mb-8 rounded bg-yellow-lighter px-6 py-8 sm:mt-10 sm:mb-10 md:px-10">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h4 className="mt-0 font-body text-lg font-normal text-blue-dark dark:text-blue-dark sm:text-xl"> {text}</h4>
            <span className="block pt-2 font-body text-sm font-light text-blue-dark underline">{textUnderline}</span>
            {buttonText.length > 0 && (
                <a className="mt-8 mb-0 inline-block border border-blue-dark px-5 py-2 font-body font-semibold text-blue-dark no-underline transition-colors hover:bg-primary hover:text-white sm:mb-4" href={href}>{buttonText}</a>
            )}
        </div>
    )
}

Card.propTypes = {
    text: PropTypes.string,
    textUnderline: PropTypes.string,
    buttonText: PropTypes.string,
    href: PropTypes.string
}

Card.defaultProps = {
    buttonText: "",
    href: ""
}
