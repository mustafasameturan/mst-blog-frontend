import { useSelector  } from "react-redux";

export const useTheme = () => useSelector(state => state.app.theme);
export const useLanguage = () => useSelector(state => state.app.language);