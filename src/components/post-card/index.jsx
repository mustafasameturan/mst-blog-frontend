import Badge from "~/components/badge/index.jsx";
import PropTypes from "prop-types";
import classNames from "classnames";
import {useTranslation} from "react-i18next";
import {formatDate} from "~/utils/date.js";
import {Link} from "react-router-dom";
import {useLanguage} from "~/stores/app/hooks.js";
import {formatSeconds} from "~/utils/duration.js";
import {getColorByPostCategory} from "~/utils/consts/functions.js";

export default function PostCard({index, post}) {

    const {t} = useTranslation();
    const language = useLanguage();

    return (
        <div
            className={classNames("border-b border-grey-lighter pb-8", {
                "pt-10": index !== 0
            })}
        >
            {post?.postCategories.map((title, index) => (
                <Badge
                    key={index}
                    index={index}
                    title={title}
                    classnames={getColorByPostCategory(title)}
                />
            ))}
            <Link
                to={`/${post.link}`}
                className="block font-body text-lg font-semibold text-primary transition-colors hover:text-green dark:text-white dark:hover:text-secondary"
            >
                {post.title}
            </Link>
            <div className="flex items-center pt-4">
                <p className="pr-2 font-body font-light text-primary dark:text-white">
                    {formatDate(post.createdDate)}
                </p>
                <span className="font-body text-grey dark:text-white">//</span>
                <p className="pl-2 font-body font-light text-primary dark:text-white">
                    {formatSeconds(post.readTime, language, t("blog.read"))}
                </p>
            </div>
        </div>
    )
}

PostCard.propTypes = {
    index: PropTypes.number,
    post: PropTypes.object
}