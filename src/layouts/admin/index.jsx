import { useRef } from "react"
import Sidebar from "./components/navbar";
import SidebarMobile from "./components/navbar-mobile";
import { Outlet } from "react-router-dom";
import {useModals} from "~/stores/modal/hooks.js";
import Modals from "~/modals/index.jsx";
import useScreenView from "~/hooks/log/use-screen-view.js";

export default function AdminLayout() {

    const mobileMenuRef = useRef();
    const modals = useModals();
    useScreenView();

    return(
        <div id="main">
            <Sidebar ref={mobileMenuRef} />
            <SidebarMobile ref={mobileMenuRef} />
            {modals.length > 0 && <Modals />}
            <div className="container mx-auto">
                <div className="py-16 lg:py-20">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}