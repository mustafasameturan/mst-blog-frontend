import { useRef } from "react"
import Sidebar from "./components/sidebar";
import SidebarMobile from "./components/sidebar-mobile";
import { Outlet } from "react-router-dom";

export default function WebLayout() {

    const mobileMenuRef = useRef();

    return(
        <div id="main">
            <Sidebar ref={mobileMenuRef} />
            <SidebarMobile ref={mobileMenuRef} />

            <Outlet />
        </div>
    )
}