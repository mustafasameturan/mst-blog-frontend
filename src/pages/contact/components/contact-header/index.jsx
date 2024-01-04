import {useTranslation} from "react-i18next";

export default function ContactHeader() {

    const { t } = useTranslation();

    return(
        <>
            <div>
                <img src="/svg/icon-contact.svg" alt="contact" width={48} height={36} />
            </div>
            <h1
                className="pt-5 font-body text-4xl font-semibold text-primary dark:text-white md:text-5xl lg:text-6xl"
            >
                {t("contact.title")}
            </h1>
            <div className="pr-2 pt-3 sm:pt-0 mt-2">
                <p className="font-body text-xl font-light text-primary dark:text-white">
                    {t("contact.description")}
                </p>
            </div>
        </>
    )
}