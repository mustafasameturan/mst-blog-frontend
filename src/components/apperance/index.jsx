import classNames from "classnames";
import {useEffect} from "react";
import useColorScheme from "~/hooks/tool/use-color-scheme.js";
import {setLanguage, setTheme} from "~/stores/app/actions";
import {useLanguage, useTheme} from "~/stores/app/hooks";
import {apperance, getApperanceIcon, getLanguageIcon, getLanguageKey} from "~/utils/consts/apperance";
import {i18n} from "~/utils/language.js";
import useAnalytics from "~/hooks/log/use-analytics.js";
import {Events} from "~/utils/consts/events.js";

export default function Apperance(){

    const theme = useTheme();
    const { colorScheme } = useColorScheme();
    const language = useLanguage();
    const analytics = useAnalytics();

    const handleChangeColor = () => {
        theme === apperance.light
            ? setTheme(apperance.dark)
            : setTheme(apperance.light);

        analytics.useAnalytics(Events.SITE_COLOR_CHANGED);
    }

    const handleChangeLanguage = () => {
        setLanguage(getLanguageKey(i18n.language));
        i18n.changeLanguage(getLanguageKey(i18n.language));

        analytics.useAnalytics(Events.LANGUAGE_CHANGED);
    }

    useEffect(() => {
      if(theme === 'default'){
          document.body.className = colorScheme
      } else {
          document.body.className = theme
      }
    }, [theme, colorScheme])

    return (
        <div className="flex gap-2 items-center">
            <i
                className={classNames(
                "bx cursor-pointer text-3xl text-primary dark:text-white transition-all duration-500", getApperanceIcon(theme, colorScheme)
                )}
                onClick={handleChangeColor}
            >
            </i>
            <img
                className={classNames("cursor-pointer text-3xl text-primary dark:text-white transition-all duration-500")}
                src={getLanguageIcon(language)}
                width={30}
                height={30}
                onClick={handleChangeLanguage}
                alt="flag"
            />
        </div>
    )
}