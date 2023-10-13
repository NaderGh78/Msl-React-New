import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider
} from "react-router-dom";
import Layout from "./Components/Layout";
import NotFound from "./Pages/NotFound";
import routes from "./routes";

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

const router = createHashRouter([
  {
    element: <Layout />,
    errorElement: <NotFound />,
    children: routes
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App; 