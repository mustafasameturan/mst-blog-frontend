import PostCard from "~/components/post-card/index.jsx";
import { posts } from "~/fake-api/posts.js";

export default function Posts() {

  return (
    <div className="py-16 lg:py-20">
      <div className="flex items-center pb-6">
        <img src="/svg/icon-story.svg" alt="icon story" width={21} height={29} />
        <h3 className="ml-3 font-body text-2xl font-semibold text-primary dark:text-white">
          My Posts
        </h3>
        <a
          href="/blog"
          className="flex items-center pl-10 font-body italic text-green transition-colors hover:text-secondary dark:text-green-light dark:hover:text-secondary"
        >
          All posts
          <img src="/svg/arrow-right.svg" className="ml-3" alt="arrow right" width={16} height={10} />
        </a>
      </div>
      <div className="pt-8">
          {posts.map((post, index) => (
            <PostCard
              key={index}
              index={index}
              text={post.title}
              date={post.date}
              readTime={post.readTime}
              badges={post.badges}
            />
          ))}
      </div>
    </div>
  );
}
