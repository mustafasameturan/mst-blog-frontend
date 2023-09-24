import { useRef } from "react"
import Sidebar from "./components/navbar";
import SidebarMobile from "./components/navbar-mobile";
import { Outlet } from "react-router-dom";
import Footer from "~/layouts/web/components/footer/index.jsx";

export default function WebLayout() {

    const mobileMenuRef = useRef();

    return(
        <div id="main">
            <Sidebar ref={mobileMenuRef} />
            <SidebarMobile ref={mobileMenuRef} />

            <Outlet />

            <Footer />
        </div>
    )
}