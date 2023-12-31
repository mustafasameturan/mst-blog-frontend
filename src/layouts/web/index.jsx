import { useRef } from "react"
import Sidebar from "./components/navbar";
import SidebarMobile from "./components/navbar-mobile";
import { Outlet } from "react-router-dom";
import Footer from "~/layouts/web/components/footer/index.jsx";
import {useModals} from "~/stores/modal/hooks.js";
import Modals from "~/modals/index.jsx";

export default function WebLayout() {

    const mobileMenuRef = useRef();
    const modals = useModals();

    return(
        <div id="main">
            <Sidebar ref={mobileMenuRef} />
            <SidebarMobile ref={mobileMenuRef} />
            {modals.length > 0 && <Modals />}
            <Outlet />
            <Footer />
        </div>
    )
}