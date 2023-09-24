import {useTranslation} from "react-i18next";

export default function Header() {

  const { t } = useTranslation();

  return (
    <div className="border-b border-grey-lighter py-16 lg:py-20">
      <div>
        <img src="/img/me.png" className="h-16 w-16 s rounded-full" alt="author" />
      </div>
      <h1 className="pt-3 font-body text-3xl font-semibold text-primary dark:text-white md:text-4xl lg:text-5xl">
          {t('home.title')}.
      </h1>
      <p className="pt-3 font-body text-xl font-light text-primary dark:text-white">
            {t('home.subtitle')}
      </p>
      <a
        href="/"
        className="mt-12 block bg-secondary px-10 py-4 text-center font-body text-xl font-semibold text-white transition-colors hover:bg-green sm:inline-block sm:text-left sm:text-2xl"
      >
          {t('home.button')}
      </a>
    </div>
  );
}
