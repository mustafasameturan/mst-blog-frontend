import {useTranslation} from "react-i18next";

export default function Story() {

  const { t } = useTranslation();

  return (
    <div className="border-b border-grey-lighter py-16 lg:py-20">
      <div className="flex items-center pb-6">
        <img src="/img/icon-story.png" alt="icon story" />
        <h3 className="ml-3 font-body text-2xl font-semibold text-primary dark:text-white">
          {t("story.title")}
        </h3>
      </div>
      <div>
        <p className="font-body font-light text-primary dark:text-white indent-3">
          {t("story.paragraph_one")}
        </p>
        <br />
        <p className="font-body font-light text-primary dark:text-white indent-3">
          {t("story.paragraph_two")}
        </p>
      </div>
    </div>
  );
}
