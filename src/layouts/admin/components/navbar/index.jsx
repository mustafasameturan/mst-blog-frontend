import { forwardRef } from "react";
import Apperance from "~/components/apperance/index.jsx";
import { toggleMobileMenu } from "~/utils/helpers.js";
import StaticLogo from "~/components/logo/index.jsx";
import {useTranslation} from "react-i18next";
import {navbarAdminLoginMenu, navbarAdminMenu, navbarMenu} from "~/utils/consts/navbar.js";
import NavbarItem from "~/layouts/web/components/navbar/components/navbar-item/index.jsx";
import {useToken} from "~/stores/auth/hooks.js";

// eslint-disable-next-line react/display-name
const Navbar = forwardRef((props, ref) => {

    const { t } = useTranslation();
    const token = useToken();

    const NAVBAR_ADMIN_MENU_ITEMS = navbarAdminMenu(t);
    const NAVBAR_ADMIN_LOGIN_MENU_ITEMS = navbarAdminLoginMenu(t);

    return (
        <div className="container mx-auto">
          <div className="flex items-center justify-between py-6 lg:py-10">
            <StaticLogo />
              <div className="flex justify-center">
                  <ul className="flex items-center">
                      {token && (
                          NAVBAR_ADMIN_MENU_ITEMS.map((item, index) => (
                              <NavbarItem
                                  key={index}
                                  path={item.path}
                                  title={item.title}
                              />
                          ))
                      )}

                      {!token && (
                          NAVBAR_ADMIN_LOGIN_MENU_ITEMS.map((item, index) => (
                              <NavbarItem
                                  key={index}
                                  path={item.path}
                                  title={item.title}
                              />
                          ))
                      )}
                  </ul>
                  <div className="flex items-center gap-x-2">
                      <Apperance/>
                  </div>
              </div>
          </div>
        </div>
    );
});

export default Navbar;