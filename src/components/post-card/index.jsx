import Badge from "~/components/badge/index.jsx";
import PropTypes from "prop-types";
import classNames from "classnames";

export default function PostCard({index, text, date, readTime, badges}) {
    return (
        <div
            className={classNames("border-b border-grey-lighter pb-8", {
                "pt-10": index !== 0
            })}
        >
            {badges.map(({title, classnames}, index) => (
                <Badge
                    key={index}
                    index={index}
                    title={title}
                    classnames={classnames}
                />
            ))}
            <a
                href="/post"
                className="block font-body text-lg font-semibold text-primary transition-colors hover:text-green dark:text-white dark:hover:text-secondary"
            >
                {text}
            </a>
            <div className="flex items-center pt-4">
                <p className="pr-2 font-body font-light text-primary dark:text-white">
                    {date}
                </p>
                <span className="font-body text-grey dark:text-white">//</span>
                <p className="pl-2 font-body font-light text-primary dark:text-white">
                    {readTime}
                </p>
            </div>
        </div>
    )
}

PostCard.propTypes = {
    index: PropTypes.number,
    text: PropTypes.string,
    date: PropTypes.string,
    readTime: PropTypes.string,
    badges: PropTypes.array
}