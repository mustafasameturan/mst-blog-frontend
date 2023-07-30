import classNames from "classnames";
import { useEffect } from "react";
import useColorScheme from "~/hooks/use-color-scheme";
import { setTheme } from "~/stores/app/actions";
import { useTheme } from "~/stores/app/hooks";
import { apperance, getApperanceIcon } from "~/utils/consts/apperance";

export default function Apperance(){

    const theme = useTheme();
    const { colorScheme } = useColorScheme();

    useEffect(() => {
      if(theme === 'default'){
          document.body.className = colorScheme
      } else {
          document.body.className = theme
      }
    }, [theme, colorScheme])

    return (
        <i 
            className={classNames(
            "bx cursor-pointer text-3xl text-primary dark:text-white transition-all duration-500", getApperanceIcon(theme, colorScheme)
            )} 
            onClick={() => { 
            theme === apperance.light
                ? setTheme(apperance.dark)
                : setTheme(apperance.light)                      
            }}
        >
        </i>
    )
}