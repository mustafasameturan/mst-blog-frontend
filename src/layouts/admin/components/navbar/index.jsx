import { forwardRef } from "react";
import Apperance from "~/components/apperance/index.jsx";
import { toggleMobileMenu } from "~/utils/helpers.js";
import StaticLogo from "~/components/logo/index.jsx";
import {useTranslation} from "react-i18next";
import {navbarAdminMenu, navbarMenu} from "~/utils/consts/navbar.js";
import NavbarItem from "~/layouts/web/components/navbar/components/navbar-item/index.jsx";

// eslint-disable-next-line react/display-name
const Navbar = forwardRef((props, ref) => {

    const NAVBAR_MENU_ITEMS = navbarAdminMenu();

    return (
        <div className="container mx-auto">
          <div className="flex items-center justify-between py-6 lg:py-10">
            <StaticLogo />
            <div className="flex items-center lg:hidden gap-x-2">
              <Apperance />
              <i className="bx bx-menu-alt-right cursor-pointer text-4xl text-primary dark:text-white" onClick={() => toggleMobileMenu(ref)}></i>
            </div>
            <div className="hidden lg:block">
              <ul className="flex items-center">
                {NAVBAR_MENU_ITEMS.map((item, index) => (
                  <NavbarItem
                      key={index}
                      path={item.path}
                      title={item.title}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div> 
    );
  });
  
  export default Navbar;