import PostCard from "~/components/post-card/index.jsx";
import {useEffect, useState} from "react";
import {GetTopPosts} from "~/services/ui/post-service.js";
import Loading from "~/components/loading/index.jsx";
import {useTranslation} from "react-i18next";
import NotFound from "~/components/not-found/index.jsx";
import {Link} from "react-router-dom";

export default function Posts() {

  const {t} = useTranslation();
  const [topPosts, setTopPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      GetTopPosts()
          .then(result => {
              if(result.statusCode === 200) {
                  setTopPosts(topPosts => result.data);
                  setLoading(loading => false);
              }
          })
  }, []);

  return (
    <div className="py-16 lg:py-20">
      <div className="flex items-center pb-6">
        <img src="/svg/icon-story.svg" alt="icon story" width={21} height={29} />
        <h3 className="ml-3 font-body text-2xl font-semibold text-primary dark:text-white">
            {t("top_posts.my_posts")}
        </h3>
        <Link
          to="/blog"
          className="flex items-center pl-10 font-body italic text-green transition-colors hover:text-secondary dark:text-green-light dark:hover:text-secondary"
        >
            {t("top_posts.all_posts")}
          <img src="/svg/arrow-right.svg" className="ml-3" alt="arrow right" width={16} height={10} />
        </Link>
      </div>

      {loading && <Loading />}

      {!loading && (
          <div className="pt-8">
              {topPosts.length > 0 && (
                  topPosts.map((post, index) => (
                      <PostCard
                          key={index}
                          index={index}
                          post={post}
                      />
                  ))
              )}

              {topPosts.length === 0 && <NotFound text={t("top_posts.not_found")} />}
          </div>
      )}
    </div>
  );
}
