import {GetProjects} from "~/services/ui/project-service.js";
import {Suspense, useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import Loading from "~/components/loading/index.jsx";

export default function Projects() {

  const { t } = useTranslation();
  const [projects, setProjects] = useState();
  const [loading, setLoading] = useState(true);

  const getAllProjects = async () => {
    const result = await GetProjects();

    if(result.statusCode === 200) {
      setLoading(loading => false);
      setProjects(projects => result.data);
    }
  }

  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <div className="pb-16 lg:pb-20">
      <div className="flex items-center pb-6">
        <img src="/img/arrow-right.png" alt="icon story" />
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
                        <img src="/img/chevron-right.png" className="mx-auto" alt="chevron right" />
                      </span>
                          </a>
                      ))
                  )}

                  {projects?.length === 0 && (
                      <h4 className="flex justify-center font-body text-md text-primary dark:text-white">
                          {t('projects.not_found')}
                      </h4>
                  )}
              </>
          )}
      </div>
    </div>
  );
}
