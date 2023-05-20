import { createBrowserRouter, RouterProvider, Outlet,createHashRouter } from "react-router-dom";
import NavbarSection from "../Components/Shared Components/Navbar";
import Footer from "../Components/Shared Components/Footer";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import ContactUs from "./ContactUs";
import Qoute from "./Qoute";
import ServiceSinglePage from "./ServiceSinglePage";
import NotFound from "./NotFound";

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

const Router = () => {

    const Layout = () => {
        return (
            <>
                <NavbarSection />
                <Outlet />
                <Footer />
            </>
        )
    }

    /*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

    const BrouwserRoutes = createHashRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Home />
                },
                {
                    path: "/about",
                    element: <About />
                },
                {
                    path: "/services",
                    element: <Services />
                },
                {
                    path: "/contact",
                    element: <ContactUs />
                },
                {
                    path: "/quote",
                    element: <Qoute />
                },
                {
                    path: "/services/:id",
                    element: <ServiceSinglePage />
                }

            ]
        },
        {
            path: "*",
            element: <NotFound />
        }
    ])

    /*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

    return (
        <RouterProvider router={BrouwserRoutes} />
    );
}

export default Router;