import {Link, useNavigate} from "react-router-dom";
import useAnalytics from "~/hooks/log/use-analytics.js";
import {Events} from "~/utils/consts/events.js";

export default function StaticLogo() {

    const analytics = useAnalytics();
    const navigate = useNavigate();

    const handleClick = () => {
        analytics.useAnalytics(Events.LOGO_CLICKED);
        navigate("/");
    }

    return (
        <button
            type="button"
            className="flex items-center font-body text-2xl font-bold text-primary dark:text-white lg:block"
            onClick={handleClick}
        >
            <span className="text-secondary text-3xl">{`<`}</span>
            <span className="text-3xl">mst</span>
            <span className="text-secondary text-2xl">{`/`}</span>
            <span className="text-secondary text-3xl">{`>`}</span>
        </button>
    )
}