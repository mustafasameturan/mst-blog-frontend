import { forwardRef } from "react";
import { Logo } from "~/assets/svg";
import Apperance from "~/components/apperance";
import { toggleMobileMenu } from "~/utils/helpers";
import {NavLink} from "react-router-dom";

const Sidebar = forwardRef((props, ref) => {

    return (
        <div className="container mx-auto">
          <div className="flex items-center justify-between py-6 lg:py-10">
            <a href="/" className="flex items-center">
              <span href="/" className="mr-2">
                <img src={Logo} alt="logo" />
              </span>
              <p className="hidden text-red-500 font-body text-2xl font-bold text-primary dark:text-white lg:block">
                John Doe
              </p>
            </a>
            <div className="flex items-center lg:hidden gap-x-2">
              <Apperance />
              <i className="bx bx-menu-alt-right cursor-pointer text-4xl text-primary dark:text-white" onClick={() => toggleMobileMenu(ref)}></i>
            </div>
            <div className="hidden lg:block">
              <ul className="flex items-center">
                <li className="group relative mr-6 mb-1">
                  <div className="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow"></div>
                  <NavLink
                    to="/"
                    className="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary"
                  >
                    Intro
                  </NavLink>
                </li>

                <li className="group relative mr-6 mb-1">
                  <div className="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow"></div>
                  <NavLink
                    to="/blog"
                    className="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary"
                  >
                    Blog
                  </NavLink>
                </li>

                <li className="group relative mr-6 mb-1">
                  <div className="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow"></div>
                  <a
                    href="/uses"
                    className="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary"
                  >
                    Uses
                  </a>
                </li>

                <li className="group relative mr-6 mb-1">
                  <div className="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow"></div>
                  <a
                    href="/contact"
                    className="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary"
                  >
                    Contact
                  </a>
                </li>

                <li>
                    <Apperance />
                </li>
              </ul>
            </div>
          </div>
        </div> 
    );
  });
  
  export default Sidebar;