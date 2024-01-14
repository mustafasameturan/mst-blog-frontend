import {useTranslation} from "react-i18next";
import Button from "~/components/button/index.jsx";
import {useNavigate} from "react-router-dom";

export default function Header() {

  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="border-b border-grey-lighter py-16 lg:py-20">
      <div>
        <img
            src="/img/me.png"
            className="h-16 w-16 rounded-full"
            alt="author"
            width={256} height={256}
        />
      </div>
      <h1 className="pt-3 font-body text-3xl font-semibold text-primary dark:text-white md:text-4xl lg:text-5xl">
          {t('home.title')}.
      </h1>
      <p className="pt-3 font-body text-xl font-light text-primary dark:text-white">
            {t('home.subtitle')}
      </p>
      <Button
        as="button"
        variant="primary"
        onClick={() => navigate("/contact")}
      >
          {t('home.button')}
      </Button>
    </div>
  );
}
