import { postsAll } from "~/fake-api/posts-all.js";
import PostCard from "~/components/post-card/index.jsx";
import BlogHeader from "~/pages/blog/components/blog-header/index.jsx";
import Subscribe from "~/pages/blog/components/subscribe/index.jsx";
import Pagination from "~/components/pagination/index.jsx";

export default function Blog(){
    return (
        <div className="container mx-auto">
            <div className="py-16 lg:py-20">

                <BlogHeader />

                <Subscribe />

                <div className="pt-8 lg:pt-12">
                    {postsAll.map((item, index) => (
                        <PostCard
                            key={index}
                            index={index}
                            text={item.title}
                            date={item.date}
                            readTime={item.readTime}
                            badges={item.badges}
                        />
                    ))}
                </div>

                <div className="p-4">
                    <Pagination count={2} />
                </div>
            </div>
        </div>
    )
}