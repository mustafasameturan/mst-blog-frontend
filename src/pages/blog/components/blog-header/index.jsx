import {Icon_Blog} from "~/assets/img/index.js";

export default function BlogHeader(){
    return (
        <>
            <div>
                <img src={Icon_Blog} alt="icon envelope" />
            </div>

            <h1
                className="pt-5 font-body text-4xl font-semibold text-primary dark:text-white md:text-5xl lg:text-6xl"
            >
                Blog
            </h1>

            <div className="pt-3 sm:w-3/4">
                <p className="font-body text-xl font-light text-primary dark:text-white">
                    Articles, tutorials, snippets, rants, and everything else. Subscribe for
                    updates as they happen.
                </p>
            </div>
        </>
    )
}