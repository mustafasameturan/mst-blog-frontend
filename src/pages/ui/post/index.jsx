import Blockquote from "~/pages/ui/post/components/blokquote/index.jsx";
import Paragraph from "~/pages/ui/post/components/paragraph/index.jsx";
import Header from "~/pages/ui/post/components/header/index.jsx";
import CodeBlock from "~/pages/ui/post/components/code-block/index.jsx";
import {useEffect, useState} from "react";
import {GetPostByPostLink, UpdateReadTime} from "~/services/ui/post-service.js";
import {useParams} from "react-router-dom";
import Badge from "~/components/badge/index.jsx";
import {formatDate} from "~/utils/date.js";
import {useLanguage} from "~/stores/app/hooks.js";
import {PostContentTypes} from "~/utils/consts/enums.js";
import Loading from "~/components/loading/index.jsx";
import {formatSeconds} from "~/utils/duration.js";
import {useTranslation} from "react-i18next";
import {getColorByPostCategory} from "~/utils/consts/functions.js";
import SharePopup from "~/pages/ui/post/components/share-popup/index.jsx";
import {Helmet} from "react-helmet";

export default function Post() {

    const { t } = useTranslation();
    const { link } = useParams() || false;
    const language = useLanguage();

    const [postData, setPostData] = useState({});
    const [loading, setLoading] = useState(true);
    const [readTime, setReadTime] = useState(-1);

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

    //Kullanıcının sayfada duruş süresi hesaplanıyor.
    useEffect(() => {
        const startTime = new Date().getTime();

        const calculateStayDuration = () => {
            const endTime = new Date().getTime();
            const duration = Math.floor((endTime - startTime) / 1000);
            setReadTime(duration);
        };

        const interval = setInterval(calculateStayDuration, 30000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        GetPostByPostLink(link)
            .then(result => {
                if(result.statusCode === 200) {
                    setPostData(postData => result.data);
                    setLoading(false)
                }
            })
    }, [link]);

    useEffect(() => {
        if(readTime !== -1){
            //ReadTime 10 saniyede bir 10 saniye arttrılıyor.
            let model = {
                postLink: link,
                readTime: 30
            };

            UpdateReadTime(model)
                .then(response => {})
                .catch(e => {});
        }

    }, [readTime]);

    return (<>
        <div className="container mx-auto">
            <Helmet>
                <title>{postData?.title}</title>
            </Helmet>
            <div className="pt-16 lg:pt-20">
                {loading && <Loading />}

                {!loading && (
                    <>
                        <div className="border-b border-grey-lighter pb-8 sm:pb-12">
                            {postData?.postCategories?.map((title, index) => (
                                <Badge
                                    key={index}
                                    index={index}
                                    title={title}
                                    classnames={getColorByPostCategory(title)}
                                />
                            ))}
                            <h2 className="block font-body text-3xl font-semibold leading-tight text-primary dark:text-white sm:text-4xl md:text-5xl">
                                {postData?.title}
                            </h2>
                            <div className="flex flex-col gap-2 pt-5 sm:pt-8">
                                <div className="flex gap-2 items-center justify-start">
                                    <img
                                        src="/img/me.png"
                                        className="h-10 w-10 rounded-full"
                                        alt="author"
                                        width={256} height={256}
                                    />
                                    <p className="font-light text-primary dark:text-white">{postData?.userInformations.fullName}</p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-1 sm:gap-0 sm:items-center">
                                <p className="pr-2 font-body font-light text-primary dark:text-white min-w-max">
                                        {formatDate(postData?.createdDate, language, 'MMMM DD, YYYY')}
                                    </p>
                                    {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                                    <span className="vdark:text-white font-body text-grey sm:block hidden">//</span>

                                    <p className="pl-0 pr-0 sm:pr-2 sm:pl-2 font-body font-light text-primary dark:text-white min-w-max">
                                        {formatSeconds(postData?.readTime, language, t("blog.read"))}
                                    </p>
                                    {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                                    <span className="vdark:text-white font-body text-grey sm:block hidden">//</span>

                                    <div className="group relative">
                                        <span
                                            className="tooltip-top -right-5 hidden sm:block">{t("share_popup.share")}</span>
                                        <SharePopup
                                            postInformation={{
                                                title: postData.title,
                                                author: postData.userInformations.fullName
                                            }}
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="max-w-none py-8 dark:text-white sm:py-12">
                            {postData?.postContents?.map((item, index) => (
                                <div key={index}>
                                    {content(item)}
                                </div>
                            ))}
                            {/*<img src={Post_Image} alt="Image" className="mb-4"/>*/}
                        </div>
                    </>
                )}
            </div>
        </div>
    </>);
}
