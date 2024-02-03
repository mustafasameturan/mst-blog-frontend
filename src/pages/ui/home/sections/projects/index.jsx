import {GetProjects} from "~/services/ui/project-service.js";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import Loading from "~/components/loading/index.jsx";
import NotFound from "~/components/not-found/index.jsx";
import useAnalytics from "~/hooks/log/use-analytics.js";
import {Events} from "~/utils/consts/events.js";

export default function Projects() {

  const { t } = useTranslation();
  const analytics = useAnalytics();

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetProjects()
        .then(result => {
            if(result.statusCode === 200){
              setProjects(projects => result.data);
              setLoading(loading => false);
            }
        })
  }, []);

  return (
    <div className="pb-16 lg:pb-20">
      <div className="flex items-center pb-6">
        <img src="/svg/arrow-right.svg" alt="arrow" width={12} height={21} />
        <h3 className="ml-3 font-body text-2xl font-semibold text-primary dark:text-white">
          {t('projects.title')}
        </h3>
      </div>
      <div>
          {loading && <Loading />}

          {!loading && (
              <>
                  {projects.length > 0 && (
                      projects.map((project, index) => (
                          <a
                              key={index}
                              href={project.url}
                              onClick={() => analytics.useAnalytics(Events.PROJECT_CLICKED, { project_url: project.url })}
                              className="mb-6 flex items-center justify-between border border-grey-lighter px-4 py-4 sm:px-6"
                              target="_blank"
                              rel="noreferrer"
                          >
                              <span className="w-9/10 pr-8">
                                <h4 className="font-body text-lg font-semibold text-primary dark:text-white">
                                  {project.name}
                                </h4>
                                <p className="font-body font-light text-primary dark:text-white">
                                  {project.description}
                                </p>
                              </span>
                              <span className="w-1/10">
                                <img src="/svg/chevron-right.svg" className="mx-auto" alt="chevron right" width={12} height={21} />
                              </span>
                          </a>
                      ))
                  )}

                  {projects?.length === 0 && <NotFound text={t('projects.not_found')} />}
              </>
          )}
      </div>
    </div>
  );
}
