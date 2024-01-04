import Blockquote from "~/pages/post/components/blokquote/index.jsx";
import Paragraph from "~/pages/post/components/paragraph/index.jsx";
import Header from "~/pages/post/components/header/index.jsx";
import CodeBlock from "~/pages/post/components/code-block/index.jsx";
import {useEffect, useState} from "react";
import {GetPostByPostId} from "~/services/ui/post-service.js";
import {useParams} from "react-router-dom";
import Badge from "~/components/badge/index.jsx";
import {formatDate} from "~/utils/date.js";
import {useLanguage} from "~/stores/app/hooks.js";
import {PostContentTypes} from "~/utils/consts/enums.js";

export default function Post() {

    const postContents = [
        {type: "header", text: "The Beginning"},
        {type: "paragraph", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Augue ut lectus arcu bibendum at varius vel. Lacus viverra vitae congue eu consequat ac felis."},
        {type: "paragraph", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Augue ut lectus arcu bibendum at varius vel. Lacus viverra vitae congue eu consequat ac felis."},
        {type: "blockquote", text: "Note: Some of the earlier articles may be amateur and have information that I wouldn’t necessarily put into an article on the subject if I wrote it today."},
        {type: "header", text: "The End"},
        {type: "paragraph", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Augue ut lectus arcu bibendum at varius vel. Lacus viverra vitae congue eu consequat ac felis."},
        {type: "code", text: `function example() {
  console.log("Hello, World!");
}`
        }
    ]

    const { postId } = useParams() || false;
    const language = useLanguage();

    const [postData, setPostData] = useState({});

    const content = (item) => {
        if (item.contentType === PostContentTypes.HEADER) {
          return <Header title={item.content} />;
        }
        if (item.contentType === PostContentTypes.PARAGRAPH) {
          return <Paragraph text={item.content} />;
        }
        if (item.contentType === PostContentTypes.BLOCKQUOTE) {
          return <Blockquote text={item.content} />;
        }
        if (item.contentType === PostContentTypes.CODE) {
          return <CodeBlock codeString={item.content} language="javascript" />;
        }
        return null;
    }

    useEffect(() => {
        GetPostByPostId(postId)
            .then(result => {
                if(result.statusCode === 200)
                    setPostData(postData => result.data);
            })
    }, [postId]);


    console.log(postData)

    return (<>
        <div className="container mx-auto">
            <div className="pt-16 lg:pt-20">
                <div className="border-b border-grey-lighter pb-8 sm:pb-12">
                    {postData?.postCategories?.map((title, index) => (
                        <Badge
                            key={index}
                            index={index}
                            title={title}
                        />
                    ))}
                    <h2 className="block font-body text-3xl font-semibold leading-tight text-primary dark:text-white sm:text-4xl md:text-5xl">
                        {postData?.title}
                    </h2>
                    <div className="flex items-center pt-5 sm:pt-8">
                        <p className="pr-2 font-body font-light text-primary dark:text-white">
                            {formatDate(postData?.createdDate, language, 'MMMM DD, YYYY')}
                        </p>
                        {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                        <span className="vdark:text-white font-body text-grey">//</span>
                        <p className="pl-2 font-body font-light text-primary dark:text-white">
                            4 min read
                        </p>
                    </div>
                </div>

                <div
                    className="max-w-none border-b border-grey-lighter py-8 dark:text-white sm:py-12"
                >
                    {postData?.postContents?.map((item, index) => (
                        <div key={index}>
                            {content(item)}
                        </div>
                    ))}
                    {/*<img src={Post_Image} alt="Image" className="mb-4"/>*/}
                </div>
            </div>
        </div>
    </>);
}