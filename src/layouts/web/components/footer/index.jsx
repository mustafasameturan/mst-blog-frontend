import { Logo } from "~/assets/svg";

export default function Footer() {
    return (
        <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between border-t border-grey-lighter py-10 sm:flex-row sm:py-12">
          <div className="mr-auto flex flex-col items-center sm:flex-row">
            <a href="/" className="mr-auto sm:mr-6">
              <img src={Logo} alt="logo" />
            </a>
            <p className="pt-5 font-body font-light text-primary dark:text-white sm:pt-0">
              ©2020 John Doe.
            </p>
          </div>
          <div className="mr-auto flex items-center pt-5 sm:mr-0 sm:pt-0">
            <a href="https://github.com/ " target="_blank">
              <i className="text-4xl text-primary dark:text-white pl-5 hover:text-secondary dark:hover:text-secondary transition-colors bx bxl-github"></i>
            </a>

            <a href="https://codepen.io/ " target="_blank">
              <i className="text-4xl text-primary dark:text-white pl-5 hover:text-secondary dark:hover:text-secondary transition-colors bx bxl-codepen"></i>
            </a>

            <a href="https://www.linkedin.com/ " target="_blank">
              <i className="text-4xl text-primary dark:text-white pl-5 hover:text-secondary dark:hover:text-secondary transition-colors bx bxl-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    )
}