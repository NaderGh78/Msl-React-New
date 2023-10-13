import PathConstants from "./pathConstants"
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Services from "../Pages/Services";
import Qoute from "../Pages/Qoute";
import SinglePage from "../Pages/SinglePage";

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

const routes = [
    { path: PathConstants.HOME, element: <Home /> },
    { path: PathConstants.ABOUT, element: <About /> },
    { path: PathConstants.SERVICES, element: <Services /> },
    { path: PathConstants.CONTACT, element: <Contact /> },
    { path: PathConstants.QUOTE, element: <Qoute /> },
    { path: PathConstants.SERVICESINGLE, element: <SinglePage /> }
]

export default routes;
