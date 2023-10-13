import { Outlet } from "react-router-dom"
import NavbarSection from "./Shared/Navbar"
import Footer from "./Shared/Footer"
import TransitionToTop from "./Shared/transitionToTop"

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

const Layout = () => {
    return (
        <>
            <NavbarSection />
            <Outlet />
            <Footer />
            <TransitionToTop/>
        </>
    )
}

export default Layout;