import PostCard from "~/components/post-card/index.jsx";
import Pagination from "~/components/pagination/index.jsx";
import {useEffect, useState} from "react";
import {GetAllPosts} from "~/services/ui/post-service.js";
import Loading from "~/components/loading/index.jsx";

export default function PostList() {

    const pageLimit = import.meta.env.VITE_PAGE_LIMIT;

    const [postData, setPostData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [totalRecord, setTotalRecord] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);

    useEffect(() => {
        let model = {
            start: currentPage * +pageLimit,
            limit: +pageLimit,
            search: ""
        }

        GetAllPosts(model)
            .then(result => {
                if(result.statusCode === 200) {
                    setTotalRecord(totalRecord => result.data.recordsTotal);
                    setPostData(postData => result.data.data);

                    setLoading(loading => false);
                }
            })
    }, [currentPage]);

    useEffect(() => {
        setPageCount(pageCount => Math.ceil(totalRecord / pageLimit));
    }, [totalRecord]);

    return (
        <>
            {loading && <Loading />}

            {!loading && (
                <>
                    <div className="pt-8 lg:pt-12">
                        {postData.map((item, index) => (
                            <PostCard
                                key={index}
                                index={index}
                                post={item}
                            />
                        ))}
                    </div>

                    {pageCount > 1 && (
                        <div className="p-4">
                            <Pagination
                                count={pageCount}
                                setCurrentPage={setCurrentPage}
                            />
                        </div>
                    )}
                </>
            )}
        </>
    )
}