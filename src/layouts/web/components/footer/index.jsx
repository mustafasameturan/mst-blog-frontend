import StaticLogo from "~/components/logo/index.jsx";
import useAnalytics from "~/hooks/log/use-analytics.js";
import {Events} from "~/utils/consts/events.js";

export default function Footer() {

    const analytics = useAnalytics();

    return (
        <div className="container mx-auto">
            <div className="flex flex-col items-center justify-between border-t border-grey-lighter py-6 sm:flex-row sm:py-8">
              <div className="mr-auto flex flex-col items-center sm:flex-row">
                <StaticLogo />
              </div>
              <div className="mr-auto flex items-center pt-5 sm:mr-0 sm:pt-0">
                <a href="https://github.com/mustafasameturan" target="_blank" rel="noreferrer" onClick={() => analytics.useAnalytics(Events.GITHUB_BUTTON_CLICKED)}>
                  <i className="text-4xl text-primary dark:text-white pl-5 hover:text-secondary dark:hover:text-secondary transition-colors bx bxl-github"></i>
                </a>

                <a href="https://www.linkedin.com/in/mustafasameturan" target="_blank" rel="noreferrer" onClick={() => analytics.useAnalytics(Events.LINKEDIN_BUTTON_CLICKED)}>
                  <i className="text-4xl text-primary dark:text-white pl-5 hover:text-secondary dark:hover:text-secondary transition-colors bx bxl-linkedin"></i>
                </a>
              </div>
            </div>
      </div>
    )
}