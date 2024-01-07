import {useTranslation} from "react-i18next";

export default function BlogHeader(){

    const { t } = useTranslation();

    return (
        <>
            <div>
                <img src="/svg/icon-blog.svg" alt="icon envelope" width={54} height={36} />
            </div>

            <h1
                className="pt-5 font-body text-4xl font-semibold text-primary dark:text-white md:text-5xl lg:text-6xl"
            >
                {t("blog.title")}
            </h1>

            <div className="pt-3 sm:w-3/4">
                <p className="font-body text-xl font-light text-primary dark:text-white">{t("blog.description")}</p>
            </div>
        </>
    )
}