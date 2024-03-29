import { useRef } from "react"
import Sidebar from "./components/navbar";
import SidebarMobile from "./components/navbar-mobile";
import {Outlet, ScrollRestoration} from "react-router-dom";
import Footer from "~/layouts/web/components/footer/index.jsx";
import {useModals} from "~/stores/modal/hooks.js";
import Modals from "~/modals/index.jsx";
import useScreenView from "~/hooks/log/use-screen-view.js";

export default function WebLayout() {

    const mobileMenuRef = useRef();
    const modals = useModals();
    useScreenView();

    return(
        <div id="main">
            {/* Route geçişlerinde scroll'u yukarıya atar */}
            <ScrollRestoration />
            <Sidebar ref={mobileMenuRef} />
            <SidebarMobile ref={mobileMenuRef} />
            {modals.length > 0 && <Modals />}
            <Outlet />
            <Footer />
        </div>
    )
}