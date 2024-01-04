import BlogHeader from "~/pages/blog/components/blog-header/index.jsx";
import Subscribe from "~/pages/blog/components/subscribe/index.jsx";
import {Helmet} from "react-helmet";
import {useTranslation} from "react-i18next";
import PostList from "~/pages/blog/components/post-list/index.jsx";

export default function Blog(){

    const { t } = useTranslation();

    return (
        <div className="container mx-auto">
            <div className="py-16 lg:py-20">
                <Helmet>
                    <title>{t("blog.title")}</title>
                </Helmet>

                <BlogHeader />

                <Subscribe />

                <PostList />
            </div>
        </div>
    )
}

