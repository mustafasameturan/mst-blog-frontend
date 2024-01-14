import { useRef } from "react"
import Sidebar from "./components/navbar";
import SidebarMobile from "./components/navbar-mobile";
import {Outlet, ScrollRestoration} from "react-router-dom";
import Footer from "~/layouts/web/components/footer/index.jsx";
import {useModals} from "~/stores/modal/hooks.js";
import Modals from "~/modals/index.jsx";

export default function WebLayout() {

    const mobileMenuRef = useRef();
    const modals = useModals();

    return(
        <div id="main">
            {/* Route geçişlerinde scroll'u yukarıya atar */}
            <ScrollRestoration />
            <Sidebar ref={mobileMenuRef} />
            <SidebarMobile ref={mobileMenuRef} />
            {modals.length > 0 && <Modals />}
            <div className="min-h-screen">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}