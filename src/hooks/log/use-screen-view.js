import useAnalytics from "~/hooks/log/use-analytics.js";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import {Events} from "~/utils/consts/events.js";

export default function useScreenView(){

    const analytics = useAnalytics();
    const location = useLocation();

    useEffect(() => {
        analytics.useAnalytics(Events.SCREEN_VIEW, { page_title: location.pathname });
    }, [location]);
}