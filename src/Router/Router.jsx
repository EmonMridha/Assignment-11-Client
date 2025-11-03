import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import VolunteerNeedsNow from "../Pages/Home/VolunteerNeedsNow";
import AddVolunterNeedPage from "../Pages/AddVolunterNeedPage";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index:true,
        Component: Home
      },
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/register',
        Component: Register
      },
      {
        path: '/addVolunteer',
        Component: AddVolunterNeedPage
      }
    ]
  },
]);

export default Router;