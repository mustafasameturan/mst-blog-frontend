import Badge from "~/components/badge/index.jsx";
import PropTypes from "prop-types";
import classNames from "classnames";
import {useTranslation} from "react-i18next";
import {formatDate} from "~/utils/date.js";
import {Link} from "react-router-dom";

export default function PostCard({index, post}) {

    const {t} = useTranslation();

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
                />
            ))}
            <Link
                to={`/post/${post.id}`}
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
                    {post.readTime} {t("top_posts.min_read")}
                </p>
            </div>
        </div>
    )
}

PostCard.propTypes = {
    index: PropTypes.number,
    post: PropTypes.object
}