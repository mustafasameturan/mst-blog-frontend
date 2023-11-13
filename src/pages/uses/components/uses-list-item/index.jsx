import PropTypes from "prop-types";
import Button from "~/components/button/index.jsx";
import classNames from "classnames";

export default function UsesListItem({ title, children, classnames, url }) {
    return(
        <li
            className={classNames("font-body text-lg font-light text-primary dark:text-white pt-4", {
                [classnames]: !!classnames
            })}
        >
            {url.length > 0 && (
                <Button
                    as="a"
                    variant="text"
                    href={url}
                    target="_blank"
                >
                    {title}:
                </Button>
            )}

            {url.length === 0 && (
                <span className="font-medium">{title}:</span>
            )}
            <span dangerouslySetInnerHTML={{__html: children}} className="ml-2"/>
        </li>
    )
}

UsesListItem.propTypes = {
    title: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    classnames: PropTypes.string,
    url: PropTypes.string
}

UsesListItem.defaultProps = {
    classnames: '',
    url: ''
}